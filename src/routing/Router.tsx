import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// ---------- ---------- ---------- ---------- ----------

import PrivateRoute from './PrivateRoute';
import { RouterLayout } from './RouterLayout';
import LoginPage from '../pages/login';
const HomePage = lazy(() => import('../pages/dashboard'))
const VentasPage = lazy(() => import('../pages/sales/historialVentas/ventas'))

const AdminPanelPage = lazy(() => import('../pages/admin/panel'));
const BrandsManagementPage = lazy(
    () => import('../pages/admin/brandManagement')
);
const CreateUser = lazy(() => import('../pages/admin/createUser'));
const ProductsManagementPage = lazy(
    () => import('../pages/admin/productManagement')
);
const ProductsPage = lazy(() => import('../pages/product'));
const WalletPage = lazy(() => import('../pages/admin/wallet'));
const UsersPage = lazy(() => import('../pages/user'));
const TeamPage = lazy(() => import('../pages/team/Team'));
const ClientsPage = lazy(() => import('../pages/clients/Clients'));
const MovimientofinancieroPage = lazy(() => import('../pages/movfinanciero/movimientofinanciero'));
const PuntosdeVentasPage = lazy(() => import('../pages/sales/puntodeventas/puntoVenta'))

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<RouterLayout />}>
                <Route
                    path="/"
                    element={<LoginPage />}
                />
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
                <Route
                    path='/home'
                    element={<PrivateRoute element={HomePage} />}
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
                    path="/admin/panel/ventas/historialVentas"
                    element={<PrivateRoute element={VentasPage} />}
                />
                <Route
                    path="/admin/panel/ventas/puntoVentas"
                    element={<PrivateRoute element={PuntosdeVentasPage} />}
                />
                <Route
                    path="/admin/panel/clients"
                    element={<PrivateRoute element={ClientsPage} />}
                />

                <Route
                    path="/products"
                    element={<PrivateRoute element={ProductsPage} />}
                />
                <Route
                    path="/admin/panel/wallet/walletManagement"
                    element={<PrivateRoute element={WalletPage} />}
                />

                <Route
                    path="/admin/panel/finanzas/movimientosFinancieros"
                    element={<PrivateRoute element={MovimientofinancieroPage} />}
                />
                <Route
                    path="/admin/panel/teams"
                    element={<PrivateRoute element={TeamPage} />}
                />
                <Route
                    path="/users"
                    element={<PrivateRoute element={UsersPage} />}
                />
            </Route>
        </Routes>
    );
};
