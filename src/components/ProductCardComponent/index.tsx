import React, { useState } from "react";
import { ICategory } from "../../interfaces/category.interface";
import "./products.css";
import Modal from "react-modal";

type ProductProps = {
  id: string;
  productName: string;
  description: string;
  price: number;
  size?: string | null;
  talle?: string | null;
  code: number;
  category: ICategory;
  createdAt: string;
  updatedAt: string;
};

export const ProductCartComponent: React.FC<ProductProps> = ({
    id,
    productName,
    description,
    price,
    size,
    talle,
    code,
    category,
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
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Largo</th>
                        <th>Talle</th>
                        <th>Código</th>
                        <th>Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={openModal}>
                        <td>{productName}</td>
                        <td>{description}</td>
                        <td>{price}</td>
                        <td>{size ? size : "-"}</td>
                        <td>{talle ? talle : "-"}</td>
                        <td>{code}</td>
                        <td>{category.categoryName}</td>
                    </tr>
                </tbody>
            </table>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <h2>Información completa del producto</h2>
                <p>Id: {id}</p>
                <p>Nombre: {productName}</p>
                <p>Descripción: {description}</p>
                <p>Precio: {price}</p>
                <p>Largo: {size ? size : "-"}</p>
                <p>Talle: {talle ? talle : "-"}</p>
                <p>Código: {code}</p>
                <p>Categoría: {category.categoryName}</p>
                <p>Creado: {createdAt}</p>
                <p>Actualizado: {updatedAt}</p>
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </div>
    );
};
