import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "./index.module.css";
import DataTable from "react-data-table-component";
import { columnasVentas } from "../../../utils/ColumnsTable/columnasVentas";
const Ventas = () => {
  const [expandSearch, setExpandSearch] = useState(false);

  const allProducts = [
    {
      Codigo: "VL-001-GR",
      Nombre: "Vestido Valencia",
      Descripcion: "Vestido Valencia gris de tela algodón",
      Categoria: "Remeras",
      Costo: 17599,
      precioEfectivo: 17599,
      precioTarjeta: 21999,
      PrecioMayorista: 18699,
      PrecioDolar: 18699,
      StockActual: 0,
      Estado: true,
    },
    
  ];

  const [selectedRows, setSelectedRows] = React.useState<any[]>([]);
  const [toggledClearRows, setToggleClearRows] = React.useState(false);
  const handleChange = ({ selectedRows }: { selectedRows: any[] }) => {
	setSelectedRows(selectedRows);
	console.log("Filas seleccionadas:", selectedRows);
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
  }
  return (
    <div className={style.container}>
      <h1 style={{ fontFamily: "Poppins", fontSize: "17.8px" }}>Productos</h1>

      <div className={style.searchAndButtonContainer}>
        <div className={expandSearch ? style.expandedSearch : style.searchBar}>
          {/* Código del input de búsqueda */}
          <span
            role="button"
            tabIndex={0}
            onClick={() => setExpandSearch(!expandSearch)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setExpandSearch(!expandSearch);
              }
            }}
          >
            <img src="ruta-del-icono" alt="Icono de búsqueda" />
          </span>
          <input type="text" placeholder="Buscar..." className={style.input} />
        </div>

        <div className={style.addButtonFlex}>
          <Button variant="primary">Añadir nuevo producto</Button>
        </div>
      </div>

      <DataTable
        columns={columnasVentas}
        // data={allProducts}
        noDataComponent="Sin datos aún..."
        pagination
        onSelectedRowsChange={handleChange}
        clearSelectedRows={toggledClearRows} data={[]}      />
    </div>
  );
};

export default Ventas;