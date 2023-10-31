import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// ---------- ---------- ---------- ---------- ----------

import PrivateRoute from './PrivateRoute';
import { RouterLayout } from './RouterLayout';
import { HomePage } from '../pages/dashboard';
//import LoginPage from '../pages/login';

const AdminPanelPage = lazy(() => import('../pages/admin/panel'));
const BrandsManagementPage = lazy(
    () => import('../pages/admin/brandManagement')
);
const CreateUser = lazy(() => import('../pages/admin/createUser'));
const ProductsManagementPage = lazy(
    () => import('../pages/admin/productManagement')
);
const ProductsPage = lazy(() => import('../pages/product'));
const UsersPage = lazy(() => import('../pages/user'));

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<RouterLayout />}>
                <Route 
                    path="/" 
                    element={<HomePage />} 
                />
                <Route 
                    path="/login" 
                    element={<HomePage />} 
                />
                <Route 
                    path="/login/page" 
                    element={<HomePage />} 
                />
                <Route
                    path="/admin/panel"
                    element={<PrivateRoute element={AdminPanelPage} />}
                />
                <Route
                    path="/admin/panel/brands/brandManagement"
                    element={<PrivateRoute element={BrandsManagementPage} />}
                />
                <Route
                    path="/admin/panel/users/createUser"
                    element={<PrivateRoute element={CreateUser} />}
                />
                <Route
                    path="/admin/panel/products/productManagement"
                    element={<PrivateRoute element={ProductsManagementPage} />}
                />
                <Route
                    path="/products"
                    element={<PrivateRoute element={ProductsPage} />}
                />
                <Route 
                    path="/users" 
                    element={<PrivateRoute element={UsersPage} />} 
                />
            </Route>
        </Routes>
    );
};
