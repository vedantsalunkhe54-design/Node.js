import { RouterProvider } from "react-router-dom";
import router from "./auth/app.routes.jsx";
import { AuthProvider } from "./auth/auth.context.jsx";
import { InterviewProvider } from "./interview/interview.context.jsx";

// here we only import all things


function App() {
  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  );
}

export default App;