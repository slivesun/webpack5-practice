import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import React from "react";
// interface muenu extends MenuItem {
//     label: React.ReactNode,
//     key?: React.Key | null,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
//     theme?: 'light' | 'dark',
// }
const muenuList: any[] = [
    {
        icon: React.createElement(VideoCameraOutlined),
        children: [
            {
                key: '/home',
                icon: React.createElement(MenuFoldOutlined),
                label: `nav 首页`,
            },
            {
                key: '/list',
                icon: React.createElement(VideoCameraOutlined),
                label: `nav 列表页`,
            },
            {
                key: '/sys',
                icon: React.createElement(VideoCameraOutlined),
                label: `nav 凑数页`,
            }
        ],
        label: '首页',
        theme: 'light',
        key: 1
    },
    {
        icon: React.createElement(UserOutlined),
        children: [
            {
                key: '/ifrence',
                icon: React.createElement(VideoCameraOutlined),
                label: `nav 财务报表`,
            },
            {
                key: '/charts',
                icon: React.createElement(VideoCameraOutlined),
                label: `echarts`,
            }
        ],
        label: '列表页',
        theme: 'light',
        key: 2
    },
    {
        icon: React.createElement(UploadOutlined),
        children: [
            {
                key: '/order',
                icon: React.createElement(VideoCameraOutlined),
                label: `nav 订单列表`,
            }
        ],
        label: '凑数页',
        theme: 'light',
        key: 3
    },
    {
        key: '/login',
        icon: React.createElement(VideoCameraOutlined),
        label: `退出登陆`,
        theme: 'dark',
    },
]
export default muenuList