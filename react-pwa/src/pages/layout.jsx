import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/molecules/header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;