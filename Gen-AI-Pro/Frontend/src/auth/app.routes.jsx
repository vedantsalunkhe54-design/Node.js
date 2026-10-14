
import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import { Protected } from "./components/Protectede";
import Home from "../interview/pages/Home";

// All routes of the website
const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },

    {
        path: "/register",
        element: <Register />,
    },

    {
        path: "/",
        element: (
            <Protected>
                <Home />
            </Protected>
        ),
    },

    {
        path: "/interview/:interviewId",
        element: (
            <Protected>
                <Home />
            </Protected>
        ),
    },
]);

export default router;
