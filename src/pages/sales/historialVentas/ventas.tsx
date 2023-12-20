import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "./index.module.css"
import { columnasVentas } from "../../../utils/ColumnsTable/columnasVentas";
import DataTable from "react-data-table-component";
const Ventas = () => {
  const [expandSearch, setExpandSearch] = useState(false);
	const [selectedRows, setSelectedRows] = useState<any[]>([]); 
	const [toggledClearRows, setToggleClearRows] = useState(false);
	const datosEjemplo = [
		{
			id:1,
			nromovimiento: "001",
			fecha: "2023-12-04",
			usuario: "Juan",
			unidadnegocio: "Ventas",
			movimiento: true,
			motivo: "Venta",
			cuenta: "Cuenta 1",
			total: 1000,
			comentario: "Transacción exitosa",
		},
		{
			id:2,
			nromovimiento: "002",
			fecha: "2023-12-05",
			usuario: "María",
			unidadnegocio: "Finanzas",
			movimiento: false,
			motivo: "Devolución",
			cuenta: "Cuenta 2",
			total: 500,
			comentario: "Producto defectuoso",
		},
	];


	const handleChange = ({ selectedRows }: { selectedRows: any[] }) => {
		console.log(selectedRows)
		setSelectedRows(selectedRows);
	  };
	  
	  
	return (
		<div className={style.container}>
			<h1 style={{ fontFamily: "Poppins", fontSize: "17.8px" }}>Ventas</h1>

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
					<Button variant="primary">Añadir nueva Venta</Button>
				</div>
			</div>

			{/* <DataTable
				columns={columnasVentas}
				data={datosEjemplo}
				noDataComponent="Sin datos aún..."
				selectableRows
				onSelectedRowsChange={handleChange}
				pagination /> */}
		</div>
	);
};

export default Ventas;