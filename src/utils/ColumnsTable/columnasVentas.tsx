interface RowType {
	id: string;
	productName: string;
	description: string;
	price: number;
	size?: string;
	talle?: string;
	code: number;
	// category: ICategory;
	// purchaseProduct: PurchaseProductsEntity[];
	// stocksIncludes: IStockIncludes[];
	createdAt: string;
	updatedAt: string;
  }
  export const columnasVentas = [
	{
	  name: "N° DE VENTA",
	  selector: (row: RowType) => row.code,
	  sortable: true,
	},
	{
	  name: "ESTADO",
	  selector: (row: RowType) => row.productName,
	},
	{
	  name: "VENDEDOR",
	  selector: (row: RowType) => row.description,
	},
	// {
	//   name: "CLIENTE",
	//   selector: (row: RowType) => row.Cliente,
	// },
	// {
	//   name: "ARTICULOS",
	//   selector: (row: RowType) => row.price,
	// },
	// {
	//   name: "TOTAL",
	//   selector: (row: RowType) => row.Pagado,
	// },
	// {
	//   name: "PAGADO",
	//   selector: (row: RowType) => row.SaldoPendiente,
	// },
	// {
	//   name: "SALDO PENDIENTE",
	//   selector: (row: RowType) => row.facturado,
	// },
	// {
	// 	name: "FACTURADO?",
	// 	selector: (row: RowType) => row.facturado,
	//   },
	
  ];
  