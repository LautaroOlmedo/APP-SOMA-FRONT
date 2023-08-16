import React from "react";
import "../../components/ProductCardComponent/products.css";
import { IBrand } from "../../interfaces/brand.interface";
import { StoreType } from "../../interfaces/store.interface";

type ProductProps = {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
  username: string;
  dni: string;
  password: string;
  role: string;
  brand: IBrand;
  storesIncludes: StoreType[]; // MODIFICAR POR INTERFACE DE STORES
  createdAt: string;
  updatedAt: string;
};

export const UserCardComponent: React.FC<ProductProps> = ({
    firstname,
    lastname,
    age,
    username,
    dni,
    role,
    brand,
    storesIncludes,
}) => {
 
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
                    <tr>
                        <td>{firstname}</td>
                        <td>{lastname}</td>
                        <td>{username}</td>
                        <td>{age}</td>
                        <td>{dni}</td>
                        <td>{role}</td>
                        <td>{brand.brandName}</td>
                        <td>
                            {storesIncludes.map((s: StoreType) => (
                                <ul key={s.id}>{s.storeName}</ul>
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
