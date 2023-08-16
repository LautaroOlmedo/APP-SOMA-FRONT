import { ICategory } from "./category.interface";
import { IStockIncludes } from "./stocksIncludes.interface";

export interface IProduct {
  id: string;
  productName: string;
  description: string;
  price: number;
  size?: string;
  talle?: string;
  code: number;
  category: ICategory;
  // purchaseProduct: PurchaseProductsEntity[];
  stocksIncludes: IStockIncludes[];
  createdAt: string;
  updatedAt: string;
}
