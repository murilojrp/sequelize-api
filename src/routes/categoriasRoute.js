export default (app) => {
    app.get('/categorias/', (req, res) => {
        return res.send('Rota das Categorias')
    });
}