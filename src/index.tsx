import { BrowserRouter, } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import React from 'react';
import RoterA from './router/router';
import { createRoot } from 'react-dom/client';
import store from './redux/index';
import { Provider } from 'react-redux';//redux 状态包裹 根组件，传递 store 状态
import zhCN from 'antd/es/locale/zh_CN';//antd 中文
import "antd/dist/antd.less";
import '@/public/css/scroll.style.scss'
const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}><BrowserRouter><ConfigProvider locale={zhCN}><RoterA /></ConfigProvider></BrowserRouter></Provider>);