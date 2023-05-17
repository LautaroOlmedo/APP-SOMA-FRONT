import React from "react";
import { Link } from "react-router-dom";

export const AdminPanelPage: React.FC<{}> = () => {
  return (
    <div>
      <div>PANEL DEL ADMINISTRADOR</div>
      <div>
        <Link to={"/admin/brandManagement"}>
          <button type="button">MARCAS</button>
        </Link>
        <Link to={"/admin/userManagement"}>
          <button type="button">USUARIOS</button>
        </Link>
      </div>
    </div>
  );
};

// crear validacion administrador
