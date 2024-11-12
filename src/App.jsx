import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Bienvenido</h1>
        </div>
      ),
      errorElement: <div>Not Found 404</div>,
      children: [],
    },
    {
      path: "/signin",
      element: <Signin />,
      errorElement: <div>Not Found 404</div>,
      children: [],
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <div>Not Found 404</div>,
      children: [],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
};

export default App;
