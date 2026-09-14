import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";

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
    element: <h1> HOME PAGE</h1>
  }
]);

export default router;