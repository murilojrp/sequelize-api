import autoresRoute from './autoresRoute';
import categoriasRoute from './categoriasRoute';
import emprestimosRoute from './emprestimosRoute';
import livrosRoute from './livrosRoute';
import usuariosRoute from './usuariosRoute';

function Routes(app) {
    categoriasRoute(app);
    autoresRoute(app);
    usuariosRoute(app);
    livrosRoute(app);
    emprestimosRoute(app);
}

export default Routes;