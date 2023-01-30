import { lazy } from 'react';

// project imports
import Layout from 'layouts';
import Loadable from 'components/Loadable';

const Dashboard = Loadable(lazy(() => import('pages/Dashboard')));
const Buy = Loadable(lazy(() => import('pages/Buy')));

const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/buy',
            element: <Buy />
        }
    ]
};

export default MainRoutes;
