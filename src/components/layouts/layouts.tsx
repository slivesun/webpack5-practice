import { Button } from "antd";
import * as React from "react";
import { useEffect } from "react";
import { Outlet, Route, useRoutes, Router, NavLink, useNavigate } from "react-router-dom";
import routeConfig from "../../router/routeConfig";
const Home = React.lazy(() => import('../../pages/home/home'));
const Layout = (props: any) => {
    const navigate = useNavigate()
    // const element = useRoutes(routeConfig);
    return <div>
        公共layout
        {/* <div>
            {element}
        </div> */}
        {/* <Home /> */}
        <Button
            type="primary"
            onClick={() => {
                navigate('/home')
            }}
        >
            去home
        </Button>
        <Button type="primary"><NavLink to={"/list"}> 去list</NavLink></Button>
        <Button type="primary"><NavLink to={"/login"}> 去login</NavLink></Button>
        <div>
            <Outlet />
        </div>
    </div>;
};
export default Layout