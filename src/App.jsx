import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      errorElement: <div>Not Found 404</div>,
      children: [
        {
          path: "/dashboard",
          element: <div>Dashboard de la Página Inicial</div>,
          errorElement: <div>Not Found 404</div>,
        },
        {
          path: "/activities",
          element: <div>Lista de Actividades Disponibles</div>,
          errorElement: <div>Not Found 404</div>,
        },
        {
          path: "/calendar",
          element: <div>Calendario de Actividades planeadas</div>,
          errorElement: <div>Not Found 404</div>,
        },
        {
          path: "/record",
          element: <div>Historial de Actividades realizadas</div>,
          errorElement: <div>Not Found 404</div>,
        },
        {
          path: "/account",
          element: <div>Detalles de la Cuenta</div>,
          errorElement: <div>Not Found 404</div>,
        },
        {
          path: "/suggestions",
          element: <div>Lista con Sugerencias de Actividades</div>,
          errorElement: <div>Not Found 404</div>,
        },
      ],
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
