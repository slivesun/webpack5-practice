import React from "react"
import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import routeConfig from './routeConfig';//路由配置表
const RoterA = () => {//通过hooks 渲染 路由配置表 使得项目可以用路由访问
    const element = useRoutes(routeConfig);//动态路由 hooks
    return (<>{element}</>)//return 出相应的 jsx 可在根目录渲染
}
export default RoterA