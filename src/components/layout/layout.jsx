import { Outlet, ScrollRestoration } from "react-router-dom";
import { ResponsiveAppBar } from "@/components/navbar/navbar.jsx";

export const Layout = () => {
    return (
        <>
            <ScrollRestoration />
            <ResponsiveAppBar />
            <Outlet />
        </>
    );
}