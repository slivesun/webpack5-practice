import React from "react"
import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import routeConfig from './routeConfig';
import Layout from '../components/layouts/layouts';
import List from '../pages/list/list';
import Home from '../pages/home/home';

const RouterA = () => {
    const element = useRoutes(routeConfig);
    return <>{element}</>
    // (
    //     <Routes>
    //         <Route path="/" element={<Layout />}></Route>
    //         <Route path="/home" element={<Home />}></Route>
    //         <Route path="/list" element={<List />}></Route>
    //         <Route path="*" element={<List />}></Route>
    //     </Routes>
    // )
}

export default RouterA