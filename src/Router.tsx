import React from "react";
import { Route, Routes } from "react-router-dom";

// ---------- ---------- ---------- ---------- ----------

import { HomePage } from "./pages/home";
import { RouterLayout } from "./common/RouterLayout";
import { AdminPanelPage } from "./pages/admin/panel";
import { BrandsManagementPage } from "./pages/admin/brandManagement";
import { ProductsManagementPage } from "./pages/admin/productManagement";
import { ProductsPage } from "./pages/product";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}></Route>
      <Route path="/home" element={<HomePage />}></Route>

      <Route path="/admin/panel" element={<AdminPanelPage />}></Route>
      <Route
        path="/admin/panel/brands/brandManagement"
        element={<BrandsManagementPage />}
      ></Route>
      <Route
        path="/admin/panel/products/productManagement"
        element={<ProductsManagementPage />}
      ></Route>

      <Route path="/products" element={<ProductsPage />}></Route>
    </Routes>
  );
};
