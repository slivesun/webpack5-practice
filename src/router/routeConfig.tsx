
import React, { lazy, ReactNode } from 'react'
import { Spin } from 'antd';
import { Outlet } from 'react-router-dom';
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
            { path: '/*', element: <div>404</div> }
        ]
    },
    { path: '/*', element: <div>404</div> }
]


// const routeConfig = [
//     {
//         path: '/home',
//         element: <Common.Home />
//     },
//     {
//         path: '/list/:id',
//         element: <Common.List />
//     },
//     {
//         path: '/children',
//         // element: <Layout />,
//         // children: [
//         //     { path: '/children/child1', element: <Child1 /> },
//         //     { path: '/children/child2', element: <Child2 /> }
//         // ]
//     }
// ]


export default routeConfig