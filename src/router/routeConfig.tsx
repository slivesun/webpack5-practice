
import React from 'react'
import * as Common from './routeCommon';
const routeConfig = [
    {
        path: '/',
        element: <Common.Layout/>,
        children: [
            { path: '/home', element: <Common.Home /> },
            { path: '/list', element: <Common.List /> }
        ]
    },
    {
        path: '/*',
        element: <div>404</div>
    }
]

export default routeConfig

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