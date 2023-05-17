import { CategoryType } from "./category.interface";
import { StocksIncludesType } from "./stocksIncludes.interface";

export interface ProductType {
  id: string;
  productName: string;
  description: string;
  price: number;
  size?: string;
  talle?: string;
  code: number;
  category: CategoryType;
  // purchaseProduct: PurchaseProductsEntity[];
  stocksIncludes: StocksIncludesType[];
  createdAt: string;
  updatedAt: string;
}
