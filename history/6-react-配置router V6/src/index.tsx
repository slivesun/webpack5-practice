import * as ReactDOM from 'react-dom';
// import * as React from 'react';
import { BrowserRouter, HashRouter, Link, Route, Routes, useRoutes } from 'react-router-dom';
import React from 'react';
import RoterA from './router/router';
import { createRoot } from 'react-dom/client';
import Layout from './components/layouts/layouts';
import List from './pages/list/list';
// import Home from './pages/home/home';
const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><RoterA /></BrowserRouter>);


// root.render(<App />);
// ReactDOM.render(
//     <BrowserRouter><RoterA /></BrowserRouter>,
//     document.getElementById("root")
// );



// root.render(<BrowserRouter>
//     <Routes>
//         <Route path="/a" element={<Layout />}>
//             <Route path="/a/home" element={<Home />}></Route>
//             <Route path="/a/list" element={<List />}></Route>
//         </Route>
//         <Route path="*" element={<>404</>}></Route>
//     </Routes>
// </BrowserRouter>);







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



    // function Home() {
    //     return (
    //         <>
    //             <main>
    //                 <h2>Welcome to the homepage!</h2>
    //                 <p>You can do this, I believe in you.</p>
    //             </main>
    //             <nav>
    //                 <Link to="/about">About</Link>
    //             </nav>
    //         </>
    //     );
    // }
    
    // function About() {
    //     return (
    //         <>
    //             <main>
    //                 <h2>Who are we?</h2>
    //                 <p>
    //                     That feels like an existential question, don't you
    //                     think?
    //                 </p>
    //             </main>
    //             <nav>
    //                 <Link to="/">Home</Link>
    //             </nav>
    //         </>
    //     );
    // }
    
    // function App() {
    //     return (
    //         <div className="App">
    //             <h1>Welcome to React Router!</h1>
    //             <Routes>
    //                 <Route path="/" element={<Home />} />
    //                 <Route path="about" element={<About />} />
    //             </Routes>
    //         </div>
    //     );
    // }
    // ReactDOM.render(
    //     <App/>,
    //     document.getElementById("root")
    // );
