import React from 'react'
// import Home from '../pages/home/home';
import List from '../pages/list/list';

const Layout = React.lazy(() => import('../components/layouts/layouts'));
const Home = React.lazy(() => import('../pages/home/home'));
export {
    Layout,
    Home,
    List,
}