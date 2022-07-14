import controller from '../controllers/usuariosController'

export default (app) => {
    app.post('/usuarios/deletar', controller.deletar)
    app.get('/usuarios', controller.getAll)
    app.get('/usuarios/:id', controller.getById)
    app.post('/usuarios', controller.persistir)
    app.post('/usuarios/:id', controller.persistir)
}