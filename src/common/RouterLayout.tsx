import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import Sidebar from "../components/Sidebar";

export const RouterLayout: React.FC<{}> = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <Outlet />
    </>
  );
};
