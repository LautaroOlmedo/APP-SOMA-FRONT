interface RowType {
	nroVenta: string;
	Estado: boolean;
	Vendedor: string;
	Cliente: string;
	Articulos: number;
	Total: number;
	Pagado: number;
	SaldoPendiente: number;
	facturado: boolean;
	StockActual: number;
  }
  export const columnasVentas = [
	{
	  name: "N° DE VENTA",
	  selector: (row: RowType) => row.nroVenta,
	  sortable: true,
	},
	{
	  name: "ESTADO",
	  selector: (row: RowType) => row.Estado,
	},
	{
	  name: "VENDEDOR",
	  selector: (row: RowType) => row.Vendedor,
	},
	{
	  name: "CLIENTE",
	  selector: (row: RowType) => row.Cliente,
	},
	{
	  name: "ARTICULOS",
	  selector: (row: RowType) => row.Articulos,
	},
	{
	  name: "TOTAL",
	  selector: (row: RowType) => row.Total,
	},
	{
	  name: "PAGADO",
	  selector: (row: RowType) => row.Pagado,
	},
	{
	  name: "SALDO PENDIENTE",
	  selector: (row: RowType) => row.SaldoPendiente,
	},
	{
	  name: "FACTURADO?",
	  selector: (row: RowType) => row.facturado,
	},
  ];
  