import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen flex">
      <Navigation />
      <main className="flex-1 lg:ml-64 p-8 bg-gray-50 mt-8 lg:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
