import React from "react";
import { Route, Routes } from "react-router-dom";

// ---------- ---------- ---------- ---------- ----------

import { HomePage } from "./pages/home";
import { RouterLayout } from "./common/RouterLayout";
import { AdminPanelPage } from "./pages/admin/panel";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/admin/panel" element={<AdminPanelPage />}></Route>
    </Routes>
  );
};
