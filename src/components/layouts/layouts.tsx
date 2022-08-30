
import * as React from "react";
import { useSetState } from 'ahooks';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, } from "antd";
import type { MenuProps, MenuTheme } from 'antd'
import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import './layouts.scss';
type MenuItem = Required<MenuProps>['items'][number];
// interface muenu extends MenuItem {
//     label: React.ReactNode,
//     key?: React.Key | null,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
//     theme?: 'light' | 'dark',
// }
let muenuList: any = [
    {
        icon: React.createElement(VideoCameraOutlined),
        children: [
            {
                key: '/home',
                icon: React.createElement(VideoCameraOutlined),
                label: `nav 首页`,
            }
        ],
        label: '首页',
        theme: 'light',

    },
    {
        icon: React.createElement(UserOutlined),
        children: [
            {
                key: '/list',
                icon: React.createElement(VideoCameraOutlined),
                label: `nav 列表页`,
            }
        ],
        label: '列表页',
        theme: 'light',
    },
    {
        icon: React.createElement(UploadOutlined),
        children: [
            {
                key: '/sys',
                icon: React.createElement(VideoCameraOutlined),
                label: `nav 凑数页`,
            }
        ],
        label: '凑数页',
        theme: 'light',
    },
    {
        icon: React.createElement(UserOutlined),
        children: [
            {
                key: '/login',
                icon: React.createElement(VideoCameraOutlined),
                label: `nav 去登录`,
            }
        ],
        label: '去登录',
        theme: 'light',
    },
]
const Layouts = (props: any) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    let [state, setState] = useSetState<any>({
        openKeys: []
    })
    return <div className='layouts'>
        <Layout className='layouts_wrap'>
            <Sider
                className='sider'
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" >
                    logo
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    // openKeys={[state.openKeys]}
                    // onOpenChange={(keys) => {
                    //     const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
                    //     const latestOpenKey = keys.find(key => state.openKeys.indexOf(key) === -1);
                    //     if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
                    //         setState({
                    //             openKeys: keys
                    //         })
                    //     } else {
                    //         setState({
                    //             openKeys: latestOpenKey ? [latestOpenKey] : []
                    //         })
                    //     }
                    // }}
                    onClick={(e) => {
                        console.log(e)
                        navigate(e.key)

                    }}
                    items={
                        muenuList
                        // [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        //     (icon, index) => ({
                        //         key: String(index + 1),
                        //         icon: React.createElement(icon),
                        //         label: `nav ${index + 1}`,
                        //         keypath: '/home'
                        //     }),
                        // )
                    }
                />
            </Sider>
            <Layout className='right'>
                <Header className="header" >
                    toubu
                </Header>
                <Content className='content'>
                    <Outlet />
                </Content>
                <Footer className='footer'>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    </div>;
};
export default Layouts