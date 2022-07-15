
//responsavel por executar o que tiver que ser executado
//as funcoes de lidar com o banco de dados
//os cruds - GetAll, GetById, Persistir, Delete
import { sequelize } from "../config/config";
import { Op } from "sequelize";
import Emprestimo from "../models/Emprestimo";
import EmprestimoLivro from "../models/EmprestimoLivro";
import Livro from "../models/Livro";

const validar = async (req, res) => {
  let { idLivro } = req.body;

  //garante que o id só vai ter NUMEROS;
  idLivro = idLivro ? idLivro.toString().replace(/\D/g, '') : null;
  
  if (!idLivro) {
    return res.status(400).send({
      message: 'Informe um id válido para verificar se o livro está emprestado'
    })
  }

  let livro = await Livro.findOne({
    where: {
      id: idLivro
    }
  })

  if (!livro) {
    return res.status(400).send({
      message: 'Esse livro não existe.'
    })
  }

  let emprestimos = await livro.getEmprestimos({
    where: {
      devolucao: {
        [Op.is]: null
      }
    }
  });

  if (!emprestimos.length) {
    return res.status(200).send({message: 'Esse livro está disponível para empréstimo'});
  }

  return res.status(200).send({
    message: 'Esse livro não está disponível para empréstimo, pois pertence ao seguinte empréstimo em aberto:',
    emprestimos: emprestimos
  })
}

const getAll = async (req, res) => {
  try {
    const emprestimos = await Emprestimo.findAll();
    let response = [];
    for (let emprestimo of emprestimos) {
      let livros = await emprestimo.getLivros(); //pegamos os livros do MODEL Emprestimo
      emprestimo = emprestimo.toJSON(); // converter o emprestimo pra JSON
      emprestimo.livros = livros; // setar no JSON do emprestimo um novo atributo livros
      response.push(emprestimo);
    }
    return res.status(200).send(emprestimos);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

const getById = async (req, res) => {
  try {
    let { id } = req.params;

    //garante que o id só vai ter NUMEROS;
    id = id.toString().replace(/\D/g, '');
    if (!id) {
      return res.status(400).send({
        message: 'Informe um id válido para consulta'
      });
    }

    let emprestimo = await Emprestimo.findOne({
      where: {
        id
      }
    });

    if (!emprestimo) {
      return res.status(400).send({
        message: `Não foi encontrada emprestimo com o id ${id}`
      });
    }

    let response = emprestimo.toJSON();

    response.livros = await emprestimo.getLivros({
      attributes: ['id', 'titulo'],
    })

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

const persistir = async (req, res) => {
  try {
    let { id } = req.params;
    //caso nao tenha id, cria um novo registro
    if (!id) {
      return await create(req.body, res)
    }

    return await update(id, req.body, res)
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

const create = async (dados, res) => {
  let { prazo, devolucao, idUsuario, livros } = dados;

  let emprestimo = await Emprestimo.create({
    prazo, devolucao, idUsuario
  });

  for (let index = 0; index < livros.length; index++) {
    let livroExistente = await Livro.findOne({
      where: {
        id: livros[index]
      }
    })

    // livro não existente não pode ser emprestado
    //com isso o emprestimo é cancelado/excluido
    if (!livroExistente) {
      await emprestimo.destroy();
      return res.status(400).send({
        message: `O livro id ${livros[index]} não existe. O empréstimo não foi salvo!!`
      })
    }

    let livroEmprestado = await sequelize.query(`
      select
        id_emprestimo as id
        from emprestimo_livros as el
        inner join emprestimos as e on (e.id = el.id_emprestimo)
        where e.devolucao is null and el.id_livro = ${livros[index]}
    `);

    if (livroEmprestado[1].rowCount) {
      await emprestimo.destroy();
      livroEmprestado = livroEmprestado[0][0] ? livroEmprestado[0][0].id : '';
      return res.status(400).send({
        message: `O livro id ${livros[index]} já está emprestado no empréstimo ${livroEmprestado}. O empréstimo não foi salvo!`
      })
    };

    await EmprestimoLivro.create({
      idEmprestimo: emprestimo.id,
      idLivro: livros[index]
    });
}

  return res.status(201).send(emprestimo)
}


const update = async (id, dados, res) => {
  let emprestimo = await Emprestimo.findOne({
    where: {
      id
    }
  });

  if (!emprestimo) {
    return res.status(400).send({ type: 'error', message: `Não foi encontrado emprestimo com o id ${id}` })
  }

  //update dos campos
  Object.keys(dados).forEach(field => emprestimo[field] = dados[field]); 

  await emprestimo.save();
  return res.status(200).send({
    message: `Empréstimo ${id} atualizado com sucesso`,
    data: emprestimo
  });
}

const deletar = async (req, res) => {
  try {
    let { id } = req.body;
    //garante que o id só vai ter NUMEROS;
    id = id ? id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(400).send({
        message: 'Informe um id válido para deletar um empréstimo'
      });
    }

    let emprestimo = await Emprestimo.findOne({
      where: {
        id
      }
    });

    if (!emprestimo) {
      return res.status(400).send({ message: `Não foi encontrado emprestimo com o id ${id}` })
    }

    await emprestimo.destroy();
    return res.status(200).send({
      message: `Empréstimo id ${id} deletado com sucesso`
    })
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

export default {
  getAll,
  getById,
  persistir,
  deletar,
  validar
}; 