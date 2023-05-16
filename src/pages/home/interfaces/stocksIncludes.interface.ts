import { StockType } from "./stock.interface";

export interface StocksIncludesType {
  id: string;

  createdAt: string;

  updatedAt: string;

  stock: StockType;
}
