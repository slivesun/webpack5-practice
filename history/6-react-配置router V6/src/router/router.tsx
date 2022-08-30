import React from "react"
import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import { Spin } from 'antd';
import routeConfig from './routeConfig';
import Layout from '../components/layouts/layouts';
import List from '../pages/list/list';
import Home from '../pages/home/home';
// import RouterWaiter from 'react-router-waiter'; // 相当于 useRoutes 动态路由配置 插件
// const RoterA = () => { //动态路由配置 插件
//     return (
//         <RouterWaiter routes={routeConfig} />
//     );
// }
const RoterA = () => {
    const element = useRoutes(routeConfig);//动态路由 hooks
    return (
        <>
            {/* React.Suspense， React.lazy 页面懒加载 配对使用 */}
            <React.Suspense>
                {element}
            </React.Suspense>
        </>
    )
    // (
    //     <>
    //         <Routes>
    //             <Route path="/" element={<Layout />}></Route>
    //             <Route path="/home" element={<Home />}></Route>
    //             <Route path="/list" element={<List />}></Route>
    //             <Route path="*" element={<List />}></Route>
    //         </Routes>
    //     </>
    // )
}
export default RoterA