import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom';
import { Home } from "./pages/home/home.jsx";
import { Heroes } from "./pages/heroes/heroes.jsx";
import { HeroDetails } from "./pages/heroDetails/heroDetails.jsx";
import { GameModes } from "./pages/gameModes/gameModes.jsx";
import { Maps } from "./pages/map/maps.jsx";
import { Info } from "./pages/info/info.jsx";
import { ResponsiveAppBar } from "./components/navbar/navbar.jsx";

const Layout = () => {
    return (
        <>
            <ScrollRestoration />
            <ResponsiveAppBar />
            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/heroes",
                element: <Heroes />,
            },
            {
                path: "/heroes/:id",
                element: <HeroDetails />,
            },
            {
                path: "/modos",
                element: <GameModes />,
            },
            {
                path: "/mapas",
                element: <Maps />,
            },
            {
                path: "/informacion",
                element: <Info />,
            },
        ]}
])

function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App
