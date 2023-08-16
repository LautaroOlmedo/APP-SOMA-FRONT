import { IProduct } from "./product.interface";

export interface IPurchaseProduct {
  id: string;
  quantity_products: number;
  total_price: number;
  purchase: string[]; //PurchaseEntity;
  product: IProduct;
}
