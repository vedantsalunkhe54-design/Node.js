import {createBrowserRouter} from 'react-router'
import Register from './pages/register'
import Login from './pages/login'

const router = createBrowserRouter([
    
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/register",
    element: <Register />
  }
]);