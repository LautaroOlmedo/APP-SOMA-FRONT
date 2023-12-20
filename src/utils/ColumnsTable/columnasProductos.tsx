interface RowType {
  category: any;
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

export const columnasProductos = [
  {
    name: "Codigo",
    selector: (row: RowType) => row.code,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row: RowType) => row.productName,
  },
  {
    name: "Descripcion",
    selector: (row: RowType) => row.description,
  },
  {
    name: "Categoria",
    selector: (row: RowType) => row.category.categoryName,
  },
  {
    name: "Costo",
    selector: (row: RowType) => row.price,
  },
/*   {
    name: "Precio Efectivo",
    selector: (row: RowType) => row.precioEfectivo,
  },
  {
    name: "Precio Tajeta",
    selector: (row: RowType) => row.precioTarjeta,
  },
  {
    name: "Precio Mayorista",
    selector: (row: RowType) => row.PrecioMayorista,
  },
  {
    name: "Precio Dolar",
    selector: (row: RowType) => row.PrecioDolar,
  },
  {
    name: "Stock Actual",
    selector: (row: RowType) => row.StockActual,
  },
  {
    name: "Estado",
    selector: (row: RowType) => row.Estado ? "Activo" : "Inactivo" ,
  }, */
];
