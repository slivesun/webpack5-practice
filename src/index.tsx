// import * as ReactDOM from 'react-dom';
// import * as React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import RouterA from './router/router';
import { createRoot } from 'react-dom/client';
const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><RouterA/></BrowserRouter>);







{
    // v5 router
}
{/* <BrowserRouter> 
        <Menus />
        <Switch>
            <Route component={() => {
                return <div>
                    这里是 children 页面
                    <Menus />
                    <Route component={Child1}
                        path="/children/child1"
                    />
                    <Route component={Child2}
                        path="/children/child2"
                    />
                </div>
            }} //children 组件  
                path="/children"
            ></Route>
            <Route component={Home}    // home 组件 
                path={'/home'}
            ></Route>
            <Route component={List}     // list 组件 
                path="/list"
            ></Route>
        </Switch>
    </BrowserRouter> */}