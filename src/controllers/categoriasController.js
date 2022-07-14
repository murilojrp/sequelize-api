
//responsavel por executar o que tiver que ser executado
//as funcoes de lidar com o banco de dados
//os cruds - GetAll, GetById, Persistir, Delete
import Categoria from "../models/Categoria";

const getAll = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    return res.status(200).send(categorias);
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

    let categoria = await Categoria.findOne({
      where: {
        id
      }
    });

    if (!categoria) {
      return res.status(400).send({
        message: `Não foi encontrada categoria com o id ${id}`
      });
    }

    return res.status(200).send(categoria);
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
  let { nome } = dados;

  let categoriaExistente = await Categoria.findOne({
    where: {
      nome
    }
  });

  if (categoriaExistente) {
    return res.status(400).send({
      message: 'Já existe uma categoria cadastrada com esse nome'
    })
  }

  let categoria = await Categoria.create({
    nome
  });
  return res.status(201).send(categoria)
}

const update = async (id, dados, res) => {
  let { nome } = dados;
  let categoria = await Categoria.findOne({
    where: {
      id
    }
  });

  if (!categoria) {
    return res.status(400).send({ type: 'error', message: `Não foi encontrada categoria com o id ${id}` })
  }

  //update dos campos
  Object.keys(dados).forEach(field => categoria[field] = dados[field]); 

  await categoria.save();
  return res.status(200).send({
    message: `Categoria ${id} atualizada com sucesso`,
    data: categoria
  });
}

const deletar = async (req, res) => {
  try {
    let { id } = req.body;
    //garante que o id só vai ter NUMEROS;
    id = id ? id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(400).send({
        message: 'Informe um id válido para deletar a categoria'
      });
    }

    let categoria = await Categoria.findOne({
      where: {
        id
      }
    });

    if (!categoria) {
      return res.status(400).send({ message: `Não foi encontrada categoria com o id ${id}` })
    }

    await categoria.destroy();
    return res.status(200).send({
      message: `Categoria id ${id} deletada com sucesso`
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