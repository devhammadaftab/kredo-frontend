import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes as Router, Route, Navigate } from "react-router-dom";
import { useStore } from 'store';
import routes from 'routes/routes';
import { setCategories } from 'store/actions';
import Layout from 'components/layout';

const Routes: React.FC = () => {
    const { state, dispatch } = useStore();
    const [routeComponent, setRouteComponent] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        let newRouteComponent: React.ReactElement[] = []
        const getRoute = (routes?: any, path?: string) => {
            for (let i = 0; i < routes.length; i++) {
                let route = routes[i];
                let Component = route.Component;
                let newpath = path ? path + route.path : route.path;
                if (Component) {
                    newRouteComponent.push(<Route key={newpath} path={newpath} element={<Layout><Component /></Layout>} />);
                }
                if (route.children.length) {
                    getRoute(route.children, newpath);
                }
            }
        }
        initialize();
        getRoute(routes)
        setRouteComponent(newRouteComponent)
    }, [])

    const initialize = async () => {
        dispatch(await setCategories());
    }

    return <BrowserRouter>
        <Router>
            {routeComponent}
        </Router>
    </BrowserRouter>
}

export default Routes;