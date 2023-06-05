import React, { useState } from "react";
import { CategoryType } from "../../pages/home/interfaces/category.interface";
import "../../components/ProductCardComponent/products.css";
import Modal from "react-modal";
import { StoreType } from "../../pages/home/interfaces/store.interface";
import { BrandType } from "../../pages/home/interfaces/brand.interface";

type ProductProps = {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
  username: string;
  dni: string;
  password: string;
  role: string;
  brand: BrandType;
  storesIncludes: StoreType[]; // MODIFICAR POR INTERFACE DE STORES
  createdAt: string;
  updatedAt: string;
};

export const UserCardComponent: React.FC<ProductProps> = ({
  id,
  firstname,
  lastname,
  age,
  username,
  dni,
  role,
  brand,
  storesIncludes,
  createdAt,
  updatedAt,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nombre de Usuario</th>
            <th>Edad</th>
            <th>DNI</th>
            <th>ROL</th>
            <th>Marca</th>
            <th>Tiendas incluidas</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={openModal}>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{username}</td>
            <td>{age}</td>
            <td>{dni}</td>
            <td>{role}</td>
            <td>{brand.brandName}</td>
            <td>
              {storesIncludes.map((s: StoreType) => (
                <ul>{s.storeName}</ul>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      {/* 
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Información completa del Usuario</h2>
        <p>Id: {id}</p>
        <p>Nombre: {firstname}</p>
        <p>Apellido: {lastname}</p>
        <p>Tiendas: {storesIncludes}</p>
        <p>Creado: {createdAt}</p>
        <p>Actualizado: {updatedAt}</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal> */}
    </div>
  );
};
