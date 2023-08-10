import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Layouts from '../layouts/Layouts'
import { Cities } from "../pages/Cities";
/* import { Children } from "react"; */

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />
            }]
    },
]);

export default router;
