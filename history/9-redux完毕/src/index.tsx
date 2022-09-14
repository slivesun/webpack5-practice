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
const container: any = document.getElementById('root');//获取根元素
const root = createRoot(container);//创建 react 根

root.render(// 渲染根元素
    // redux注入 store 对象
    <Provider store={store}>
        {/* 包裹histroy路由 */}
        <BrowserRouter>
            {/* antd语言汉化，国际化会用 */}
            <ConfigProvider locale={zhCN}>
                {/* 根路由*/}
                <RoterA />
            </ConfigProvider>
        </BrowserRouter>
    </Provider>
);