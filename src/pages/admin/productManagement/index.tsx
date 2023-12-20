import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "./index.module.css";
import DataTable from "react-data-table-component";
import { useGetAllProducts } from "../../../api/product/useGetAllProducts";
import { columnasProductos } from "../../../utils/ColumnsTable/columnasProductos";
const ProductManagement = () => {
  const [expandSearch, setExpandSearch] = useState(false);
  const products = useGetAllProducts()
  console.log("Soy products:", products.data)

  return (
    <div className={style.container}>
      <h1 style={{ fontFamily: "Poppins", fontSize: "17.8px" }}>Productos</h1>

      <div className={style.searchAndButtonContainer}>
      

        <div className={style.addButtonFlex}>
          <Button variant="primary">Añadir nuevo producto</Button>
        </div>
      </div>

      <DataTable
        columns={columnasProductos}
        data={products.data || []}
        noDataComponent="Sin datos aún..."
        pagination
      />
    </div>
  );
};

export default ProductManagement;