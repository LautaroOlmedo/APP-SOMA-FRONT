import React from "react";
import { Link } from "react-router-dom";
import { RouteHeading } from "../../../components/RouteHeading/RouteHeading";

const AdminPanelPage = () => {
    return (
        <div>
            <RouteHeading />
            <div>PANEL DEL ADMINISTRADOR</div>
            <div>
                <Link to={"/admin/panel/brands/brandManagement"}>
                    <button type="button">MARCAS</button>
                </Link>
                <Link to={"/admin/userManagement"}>
                    <button type="button">USUARIOS</button>
                </Link>
                <Link to={"/admin/panel/products/productManagement"}>
                    <button type="button">PRODUCTOS</button>
                </Link>
            </div>
        </div>
    );
};

export default AdminPanelPage
// crear validacion administrador
