
import React, { lazy, ReactNode } from 'react'
import { Spin } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
const lazyLoad = (Children: any): ReactNode => {//lazy 解决 闪烁白屏
    return (
        <React.Suspense fallback={<Spin></Spin>}>
            <Children />
        </React.Suspense>
    )
}
interface RouteObject {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
}
const routeConfig: RouteObject[] = [
    { path: '/login', element: lazyLoad(lazy(() => import('@/pages/login/login'))) },
    {
        path: '/',
        element: lazyLoad(lazy(() => import('@/components/layouts/layouts'))),
        children: [
            { path: '/home', element: lazyLoad(lazy(() => import('@/pages/home/home'))) },//lazy路由懒加载，不切换到相应路由不加载dom
            { path: '/list', element: lazyLoad(lazy(() => import('@/pages/list/list'))) },
            { path: '/sys', element: lazyLoad(lazy(() => import('@/pages/sys/sys'))) },
            { path: '/ifrence', element: lazyLoad(lazy(() => import('@/pages/ifrence/ifrence'))) },
            { path: '/order', element: lazyLoad(lazy(() => import('@/pages/order/order'))) },
            { path: '/order/:id', element: lazyLoad(lazy(() => import('@/pages/order/detail/detail'))) },
            {// 这里解决默认打开home页面
                path: "",
                element: <Navigate to="home" replace />
            },
            { path: '/*', element: <div>404</div> }
        ]
    },
    { path: '/*', element: <div>404</div> }
]
export default routeConfig