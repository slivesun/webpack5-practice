import React, { ReactNode } from 'react'
// import Layout from '../components/layouts/layouts';
// import Home from '../pages/home/home';
import List from '../pages/list/list';

const Layout = React.lazy(() => import('../components/layouts/layouts'));
const Home = React.lazy(() => import('../pages/home/home'));
const LogIn = React.lazy(() => import('../pages/login/login'));
export {
    Layout,
    Home,
    List,
    LogIn,
}