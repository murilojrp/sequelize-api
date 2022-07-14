import controller from '../controllers/livrosController'

export default (app) => {
    app.post('/livros/deletar', controller.deletar)
    app.get('/livros', controller.getAll)
    app.get('/livros/:id', controller.getById)
    app.post('/livros', controller.persistir)
    app.post('/livros/:id', controller.persistir)
}