import * as React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return <div>
        公共
        <Outlet/>
    </div>;
};
export default Layout