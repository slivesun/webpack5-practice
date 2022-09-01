
import * as React from "react";
import { useSetState } from 'ahooks';
import { Breadcrumb, Button, Layout, Menu, } from "antd";
import { MenuUnfoldOutlined, } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import muenuList from './muenu.config';
const { Header, Content, Footer, Sider } = Layout;
import './layouts.scss';
const breadcrumbNameMap: any = {
    '/home': '首页',
    '/list': '列表页',
    '/ifrence': '财务列表',
    '/order': '订单列表',
    '/sys': '不知道页',
    '/order/234234': '订单详情',
};
const Layouts = (props: any) => {
    // 配置全局路由
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    // const breadcrumbItems = [
    //     <Breadcrumb.Item key="home">
    //         <Link to="/">首页</Link>
    //     </Breadcrumb.Item>,
    // ].concat(extraBreadcrumbItems);
    const breadcrumbItems = extraBreadcrumbItems;

    const navigate = useNavigate();
    let [state, setState] = useSetState<any>({
        openKeys: [],
        collapsed: false
    })


    // 菜单打开，其余关闭
    const onOpenChange = (keys: any) => {
        console.log(keys, 'dddddd')
        const latestOpenKey = keys.find((key: any) => state.openKeys.indexOf(key) === -1);
        let rootMeunKey: any[] = []
        muenuList.forEach(it => {
            rootMeunKey.push(String(it.key))
        })
        if (rootMeunKey.indexOf(latestOpenKey) == -1) {
            setState({
                openKeys: keys
            });
        } else {
            setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            })
        }
    };
    return <div className='layouts'>
        <Layout className='layouts_wrap'>
            <div className="layouts_left">
                <div className="logo" >
                    {state.collapsed ? 'O' : 'logo'}
                </div>
                <Sider
                    className='sider'
                    breakpoint="lg"
                    collapsedWidth="40"
                    theme="light"
                    reverseArrow
                    onBreakpoint={broken => {
                        // console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type, 'dddddddddddd');
                    }}
                    collapsed={state.collapsed}
                >
                    <Menu
                        theme="light"
                        mode="inline"
                        openKeys={state.openKeys}
                        onOpenChange={onOpenChange}
                        onClick={(e) => {
                            console.log(e)
                            navigate(e.key, { state: { a: 1, l: 'asd' } })
                        }}
                        items={
                            muenuList
                        }
                    />
                </Sider>
            </div>
            <Layout className='right'>
                <Header className="header" >
                    <div className="header_left">
                        <div className="collapsed">
                            <div
                                className="silder_show"
                                onClick={() => {
                                    setState({
                                        collapsed: !state.collapsed
                                    })
                                }}
                            >
                                <MenuUnfoldOutlined />
                            </div>
                        </div>
                        <Breadcrumb>{
                            Object.keys(breadcrumbNameMap).includes('/' + pathSnippets.join('/')) ?
                                breadcrumbItems : (
                                    <Breadcrumb.Item >
                                        <Link to={'/'}>回首页</Link>
                                    </Breadcrumb.Item>
                                )}</Breadcrumb>
                    </div>
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