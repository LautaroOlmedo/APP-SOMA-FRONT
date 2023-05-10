import { CategoryType } from "./category.interface";

export interface ProductType {
  id: string;
  productName: string;
  description: string;
  price: number;
  size?: string;
  talle?: string;
  code: number;
  category: CategoryType;
  //purchaseProduct: PurchaseProductsEntity[];
  //stocksIncludes: StockProductsEntity[];
  createdAt: string;
  updatedAt: string;
}
