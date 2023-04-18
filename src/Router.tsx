import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { UserManagementPage } from "./pages/admin/userManagement";
import { BrandManagementPage } from "./pages/admin/brandsManagement";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route
        path="/admin/usersManagement"
        element={<UserManagementPage />}
      ></Route>
      <Route
        path="/admin/brandManagement"
        element={<BrandManagementPage />}
      ></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
};
