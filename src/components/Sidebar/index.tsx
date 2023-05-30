import React, { useState } from "react";
import "./sidebar.css";
import sidebarImage from "./loading.png";

const Sidebar: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const handleBranchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(event.target.value);
  };

  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories((prevCategories) =>
        prevCategories.filter((cat) => cat !== category)
      );
    } else {
      setExpandedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  const isCategoryExpanded = (category: string) => {
    return expandedCategories.includes(category);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-image">
        <img src={sidebarImage} alt="Sidebar Image" />
      </div>
      <h2>RUKMINI</h2>
      <div className="sidebar-divider"></div>
      <div className="branch-field">
        <label htmlFor="branch">Sucursal:</label>
        <select
          id="branch"
          value={selectedBranch}
          onChange={handleBranchChange}
        >
          <option value="">Seleccionar sucursal</option>
          <option value="Sucursal 1">Sucursal 1</option>
          <option value="Sucursal 2">Sucursal 2</option>
          <option value="Sucursal 3">Sucursal 3</option>
        </select>
      </div>
      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Productos</a>
          <span
            className="category-toggle"
            onClick={() => toggleCategory("products")}
          >
            {isCategoryExpanded("products") ? "-" : "+"}
          </span>
          {isCategoryExpanded("products") && (
            <ul className="subcategories">
              <li>
                <a href="#">Categoría 1</a>
              </li>
              <li>
                <a href="#">Categoría 2</a>
              </li>
              <li>
                <a href="#">Categoría 3</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#">Clientes</a>
        </li>
        <li>
          <a href="#">Finanzas</a>
        </li>
        <li>
          <a href="#">Ventas</a>
        </li>
        <div className="sidebar-divider"></div>
        <li>
          <a href="#">Equipo</a>
        </li>
        <li>
          <a href="#">Configuracion</a>
        </li>
        <li>
          <a href="#">Ayuda</a>
        </li>
      </ul>
      <div className="sidebar-divider"></div>
      <h4>Más de Soma Emprende</h4>
      <ul>
        <li>
          <a href="#">Sueldos Software</a>
        </li>

        <li>
          <a href="#">¿Necesitas un ecommerce?</a>
        </li>

        <li>
          <a href="#">Consultorias 1:1</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
