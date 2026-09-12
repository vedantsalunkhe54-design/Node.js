import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;