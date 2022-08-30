import { BrowserRouter, } from 'react-router-dom';
import React from 'react';
import RoterA from './router/router';
import { createRoot } from 'react-dom/client';
import "antd/dist/antd.less"
const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><RoterA /></BrowserRouter>);