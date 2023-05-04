import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { UserMAnagementPage } from "./pages/admin/userManagement";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<UserMAnagementPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
};
