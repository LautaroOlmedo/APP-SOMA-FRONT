import React from "react";
import { CategoryType } from "../../pages/home/interfaces/category.interface";

type ProductProps = {
  id: string;
  productName: string;
  description: string;
  price: number;
  size?: string | null;
  talle?: string | null;
  code: number;
  category: CategoryType;
  //purchaseProduct: PurchaseProductsEntity[];
  //stocksIncludes: StockProductsEntity[];
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
  //purchaseProduct: PurchaseProductsEntity[];
  //stocksIncludes: StockProductsEntity[];
  createdAt,
  updatedAt,
}) => {
  return (
    <div>
      <ul>
        <li>
          Id: {id} <br /> <br />
          Nombre: {productName} <br /> <br />
          Descripcion: {description} <br /> <br />
          precio: {price} <br /> <br />
          largo: {size ? size : null} <br /> <br />
          talle: {talle ? talle : null} <br /> <br />
          codigo: {code} <br /> <br />
          categoria: {category.categoryName} <br /> <br />
          creado: {createdAt}
          <br /> <br />
          actualizado: {updatedAt}
          <br /> <br />
        </li>
      </ul>
    </div>
  );
};
