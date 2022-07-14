
//responsavel por executar o que tiver que ser executado
//as funcoes de lidar com o banco de dados
//os cruds - GetAll, GetById, Persistir, Delete
import Emprestimo from "../models/Emprestimo";

const getAll = async (req, res) => {
  try {
    const autores = await Emprestimo.findAll();
    return res.status(200).send(autores);
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
    id = id.replace(/\D/g, '');
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

    return res.status(200).send(emprestimo);
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
  let { nome, email } = dados;

  let emprestimoExistente = await Emprestimo.findOne({
    where: {
      nome
    }
  });

  if (emprestimoExistente) {
    return res.status(400).send({
      message: 'Já existe um emprestimo cadastrado com esse nome'
    })
  }

  let emprestimo = await Emprestimo.create({
    nome,
    email
  });
  return res.status(201).send(emprestimo)
}

const update = async (id, dados, res) => {
  let { nome, email } = dados;
  let autor = await Autor.findOne({
    where: {
      id
    }
  });

  if (!autor) {
    return res.status(400).send({ type: 'error', message: `Não foi encontrado autor com o id ${id}` })
  }

  //update dos campos
  Object.keys(dados).forEach(field => autor[field] = dados[field]); 

  await autor.save();
  return res.status(200).send({
    message: `Autor ${id} atualizado com sucesso`,
    data: autor
  });
}

const deletar = async (req, res) => {
  try {
    let { id } = req.body;
    //garante que o id só vai ter NUMEROS;
    id = id ? id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(400).send({
        message: 'Informe um id válido para deletar um autor'
      });
    }

    let autor = await Autor.findOne({
      where: {
        id
      }
    });

    if (!autor) {
      return res.status(400).send({ message: `Não foi encontrado autor com o id ${id}` })
    }

    await autor.destroy();
    return res.status(200).send({
      message: `Autor id ${id} deletado com sucesso`
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
  deletar
}; 