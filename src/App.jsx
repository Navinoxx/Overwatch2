import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "./pages/home/home.jsx";
import { Heroes } from "./pages/heroes/heroes.jsx";
import { HeroDetails } from "./pages/heroDetails/heroDetails.jsx";
import { GameModes } from "./pages/gameModes/gameModes.jsx";
import { Maps } from "./pages/map/maps.jsx";
import { Info } from "./pages/info/info.jsx";
import { Error404 } from './pages/error/error404.jsx';
import { Layout } from './components/layout/layout.jsx';

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
                children: [
                    {
                        index: true,
                        element: <Heroes />,
                    },
                    {
                        path: ":id",
                        element: <HeroDetails />,
                    }
                ]
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
            {
                path: "*",
                element: <Error404 />,
            }
        ]}
])

function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App
