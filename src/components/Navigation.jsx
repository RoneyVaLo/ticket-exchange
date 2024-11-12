import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const routes = [
    {
      path: "/dashboard",
      visibleText: "Dashboard",
    },
    {
      path: "/activities",
      visibleText: "Actividades",
    },
    {
      path: "/calendar",
      visibleText: "Calendario",
    },
    {
      path: "/record",
      visibleText: "Historial",
    },
    {
      path: "/account",
      visibleText: "Cuenta",
    },
    {
      path: "/suggestions",
      visibleText: "Sugerencias",
    },
  ];

  return (
    <>
      {/* Botón toggle para móviles */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-rose-100 text-rose-700 hover:bg-rose-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay oscuro cuando el menú está abierto en móvil */}
      <div
        className={`
          fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0
        h-full w-64 
        bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        z-40
      `}
      >
        {/* Logo/Título */}
        <div className="h-16 flex items-center justify-center px-6 border-b">
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-cursive text-rose-700">
              TICKETS
            </span>
          </NavLink>
        </div>

        {/* Links de navegación */}
        <nav className="mt-6 px-4">
          <div className="flex flex-col space-y-2">
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un link en móvil
                className={({ isActive }) => `
                  px-4 py-3 
                  rounded-md 
                  text-sm font-serif 
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-rose-100 text-rose-700"
                      : "text-gray-600 hover:bg-rose-50 hover:text-rose-500"
                  }
                `}
              >
                {route.visibleText.toUpperCase()}
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navigation;
