
import * as React from "react";
import { useSetState } from 'ahooks';
import { Button, Layout, Menu, } from "antd";
import { MenuUnfoldOutlined, } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import muenuList from './muenu.config';
const { Header, Content, Footer, Sider } = Layout;
import './layouts.scss';

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
                    selectedKeys={state.openKeys}
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
                        navigate(e.key, { state: { a: 1, l: 'asd' } })
                        setState({
                            openKeys: e.key
                        })
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
                    <div
                        className="out"
                        onClick={() => {
                            navigate('/login')
                        }}
                    >
                        <MenuUnfoldOutlined />退出
                    </div>
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