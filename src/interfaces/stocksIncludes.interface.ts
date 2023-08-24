import { IStock } from "./stock.interface";

export interface IStockIncludes {
  id: string;
  createdAt: string;
  updatedAt: string;
  stock: IStock;
}
