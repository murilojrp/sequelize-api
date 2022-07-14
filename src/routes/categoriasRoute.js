import controller from '../controllers/categoriasController'

export default (app) => {
    app.post('/categorias/deletar', controller.deletar)
    app.get('/categorias', controller.getAll)
    app.get('/categorias/:id', controller.getById)
    app.post('/categorias', controller.persistir)
    app.post('/categorias/:id', controller.persistir)
}