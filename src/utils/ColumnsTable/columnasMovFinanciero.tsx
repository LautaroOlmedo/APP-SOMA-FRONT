interface RowType {
	nromovimiento: string;
	fecha: string;
	usuario: string;
	unidadnegocio: string;
	movimiento: boolean;
	motivo: string;
	cuenta: string;
	total: number;
	comentario: string;
  }
  export const columnasMovFinanciero = [
	{
	  name: "Nº de Movimiento",
	  selector: (row: RowType) => row.nromovimiento,
	  sortable: true,
	},
	{
	  name: "Fecha",
	  selector: (row: RowType) => row.fecha,
	},
	{
	  name: "Usuario",
	  selector: (row: RowType) => row.usuario,
	},
	{
	  name: "Unidad de negocio",
	  selector: (row: RowType) => row.unidadnegocio,
	},
	{
	  name: "Movimiento",
	  selector: (row: RowType) => row.movimiento,
	},
	{
	  name: "Motivo",
	  selector: (row: RowType) => row.motivo,
	},
	{
	  name: "Cuenta",
	  selector: (row: RowType) => row.cuenta,
	},
	{
	  name: "Total",
	  selector: (row: RowType) => row.total,
	},
	{
	  name: "Comentario",
	  selector: (row: RowType) => row.comentario,
	},
  ];
  