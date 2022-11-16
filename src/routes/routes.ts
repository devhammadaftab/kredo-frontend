import routesUrl from 'constants/routes';
import { Home, Product } from 'pages';

const routes = [{
    path: routesUrl.category,
    Component: Home,
    children: []
}, {
    path: routesUrl.product,
    Component: Product,
    children: []
}]

export default routes