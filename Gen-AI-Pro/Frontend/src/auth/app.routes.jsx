import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import { Protected } from "./components/Protectede";

// Here we give all routes of the website

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },{
    path: "/",
    element: <Protected> <h1>HOME PAGE</h1> </Protected>
  }
]);

export default router;