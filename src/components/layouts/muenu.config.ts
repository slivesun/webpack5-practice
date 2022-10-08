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
                children: [
                    {
                        key: '/list/order',
                        icon: React.createElement(VideoCameraOutlined),
                        label: `l列表页e`,
                        children: [
                            {
                                key: '/list/order/lj',
                                icon: React.createElement(VideoCameraOutlined),
                                label: `le-理解`,
                            },
                            {
                                key: '/list/redux/dd',
                                icon: React.createElement(VideoCameraOutlined),
                                label: `le-嘀嗒`,
                            }
                        ],
                    },
                    {
                        key: '/list/redux',
                        icon: React.createElement(VideoCameraOutlined),
                        label: `w列表页r`,
                        children: [
                            {
                                key: '/list/redux/rt',
                                icon: React.createElement(VideoCameraOutlined),
                                label: `wr-认同`,
                            },
                            {
                                key: '/list/redux/uy',
                                icon: React.createElement(VideoCameraOutlined),
                                label: `wr-㕛`,
                            }
                        ],
                    }
                ],
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
            },
            {
                key: '/reduxNum',
                icon: React.createElement(VideoCameraOutlined),
                label: `reduxNum`,
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