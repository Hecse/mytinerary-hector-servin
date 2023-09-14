import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Layouts from '../layouts/Layouts'
import { Cities } from "../pages/Cities";
import LogIn from "../pages/LogIn";
import City from "../pages/City";
import SignUp from "../pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";

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
            },
            {
                path: '/cities/:id',
                element: <City />
            },
            {
                path: '/login',
                element: (<ProtectedRoute path='/'>
                    <LogIn />
                </ProtectedRoute>)

            },
            {
                path: '/singup',
                element: (<ProtectedRoute path='/'>
                    <SignUp />
                </ProtectedRoute>)
            }
        ]
    },
]);

export default router;
