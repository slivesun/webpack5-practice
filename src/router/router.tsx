import React from "react"
import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import routeConfig from './routeConfig';
const RoterA = () => {
    const element = useRoutes(routeConfig);//动态路由 hooks
    return (
        <>
            {element}
        </>
    )
   
}
export default RoterA