import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import Sidebar from "../components/Sidebar";

import "./NavBar.css";

export const RouterLayout: React.FC<{}> = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <NavBar />
        <Outlet />
      </div>

      <div className="yugoslavia">
        <NavBar />
        <Sidebar />
      </div>
    </>
  );
};
