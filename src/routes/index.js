import autoresRoute from './autoresRoute';
import categoriasRoute from './categoriasRoute';
import livrosRoute from './livrosRoute';
import usuariosRoute from './usuariosRoute';

function Routes(app) {
    categoriasRoute(app);
    autoresRoute(app);
    usuariosRoute(app);
    livrosRoute(app);
}

export default Routes;