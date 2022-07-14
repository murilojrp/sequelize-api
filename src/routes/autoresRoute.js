import controller from '../controllers/autoresController'

export default (app) => {
    app.post('/autores/deletar', controller.deletar)
    app.get('/autores', controller.getAll)
    app.get('/autores/:id', controller.getById)
    app.post('/autores', controller.persistir)
    app.post('/autores/:id', controller.persistir)
}