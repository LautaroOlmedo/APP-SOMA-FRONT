import React from "react";
import { Route, Routes } from "react-router-dom";

// ---------- ---------- ---------- ---------- ----------

import { HomePage } from "./pages/home";
import { RouterLayout } from "./common/RouterLayout";
import { AdminPanelPage } from "./pages/admin/panel";
import { BrandsManagementPage } from "./pages/admin/brandManagement";
import { ProductsManagementPage } from "./pages/admin/productManagement";
import { ProductsPage } from "./pages/product";
import LoginPage from "./pages/login";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/panel" element={<AdminPanelPage />} />
        <Route
          path="/admin/panel/brands/brandManagement"
          element={<BrandsManagementPage />}
        />
        <Route
          path="/admin/panel/products/productManagement"
          element={<ProductsManagementPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};
