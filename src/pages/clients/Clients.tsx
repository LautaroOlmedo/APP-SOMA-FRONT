import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "./index.module.css";
import DataTable from "react-data-table-component";
import { columnasClients } from "../../utils/ColumnsTable/columnasClients";

  const Clientes= () => {	
	const [expandSearch, setExpandSearch] = useState(false);

	const data = [
		{ cliente: 'Tomas gelvez', dni: '10.432.152', localidad: "Cordoba", telefono: "3512356584", origenCliente: "Local/Showroom", email: "Tomasgelvez8@gmail.com", ventasRelacionadas: "Venta N°fffb505f" },
		{ cliente: 'Tomas gelvez', dni: '10.432.152', localidad: "Cordoba", telefono: "3512356584", origenCliente: "Local/Showroom", email: "Tomasgelvez8@gmail.com", ventasRelacionadas: "Venta N°fffb505f" },
		{ cliente: 'Tomas gelvez', dni: '10.432.152', localidad: "Cordoba", telefono: "3512356584", origenCliente: "Local/Showroom", email: "Tomasgelvez8@gmail.com", ventasRelacionadas: "Venta N°fffb505f" },
		{ cliente: 'Tomas gelvez', dni: '10.432.152', localidad: "Cordoba", telefono: "3512356584", origenCliente: "Local/Showroom", email: "Tomasgelvez8@gmail.com", ventasRelacionadas: "Venta N°fffb505f" },
		{ cliente: 'Tomas gelvez', dni: '10.432.152', localidad: "Cordoba", telefono: "3512356584", origenCliente: "Local/Showroom", email: "Tomasgelvez8@gmail.com", ventasRelacionadas: "Venta N°fffb505f" },
	];

	
	return (
		<div className={style.container}>
			<h1 style={{ fontFamily: "Poppins", fontSize: "17.8px" }}>Clientes</h1>

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
				columns={columnasClients}
				data={data}
				noDataComponent="Sin datos aún..."
				pagination
				selectableRows  />
		</div>
	);
};

export default Clientes;