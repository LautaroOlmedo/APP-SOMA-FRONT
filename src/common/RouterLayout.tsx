import React from "react";
import { Outlet } from "react-router-dom";
// import { NavBar } from "./NavBar";
import Sidebar from "../components/Sidebar";
import "../common/RouterLayout.css";

export const RouterLayout: React.FC<{}> = () => {
  return (
    <div className="hola">
      <Sidebar />
      {/* <NavBar /> */}
      <Outlet />
    </div>
  );
};
