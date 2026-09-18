import { RouterProvider } from "react-router-dom";
import router from "./auth/app.routes.jsx";
import { AuthProvider } from "./auth/auth.context.jsx";

// here we only import all things


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;