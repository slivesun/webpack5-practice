import { BrowserRouter, } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import React from 'react';
import RoterA from './router/router';
import { createRoot } from 'react-dom/client';
import zhCN from 'antd/es/locale/zh_CN';//antd 中文
import "antd/dist/antd.less";
import '@/public/css/scroll.style.scss'
const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><ConfigProvider locale={zhCN}><RoterA /></ConfigProvider></BrowserRouter>);