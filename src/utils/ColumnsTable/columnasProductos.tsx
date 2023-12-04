interface RowType {
  Codigo: string;
  Nombre: string;
  Descripcion: string;
  Categoria: string;
  Costo: number;
  precioEfectivo: number;
  precioTarjeta: number;
  PrecioMayorista: number;
  PrecioDolar: number;
  StockActual: number;
  Estado: boolean;
}
export const columnasProductos = [
  {
    name: "Codigo",
    selector: (row: RowType) => row.Codigo,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row: RowType) => row.Nombre,
  },
  {
    name: "Descripcion",
    selector: (row: RowType) => row.Descripcion,
  },
  {
    name: "Categoria",
    selector: (row: RowType) => row.Categoria,
  },
  {
    name: "Costo",
    selector: (row: RowType) => row.Costo,
  },
  {
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
  },
];
