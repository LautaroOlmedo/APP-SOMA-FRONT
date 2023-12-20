interface RowType {
	cliente: string;
	dni: string;
	localidad: string;
	telefono: string;
	origenCliente: string;
	email: string;
	ventasRelacionadas: string;
  }
  export const columnasClients = [
	{
	  name: "Cliente",
	  selector: (row: RowType) => row.cliente,
	  sortable: true,
	},
	{
	  name: "DNI",
	  selector: (row: RowType) => row.dni,
	},
	{
	  name: "Localidad",
	  selector: (row: RowType) => row.localidad,
	},
	{
	  name: "Teléfono",
	  selector: (row: RowType) => row.telefono,
	},
	{
	  name: "Origen del Cliente",
	  selector: (row: RowType) => row.origenCliente,
	},
	{
	  name: "E-mail",
	  selector: (row: RowType) => row.email,
	},
	{
	  name: "Related Ventas",
	  selector: (row: RowType) => row.ventasRelacionadas,
	}
  ];
  