
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
    console.log(pathSnippets, 'pathSnippetspathSnippetspathSnippets')
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        console.log(url, 'urlurlurlurlurlurlurlurl')
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
                    <div>
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