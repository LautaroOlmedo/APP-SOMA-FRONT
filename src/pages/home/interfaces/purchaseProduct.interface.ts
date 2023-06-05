import { ProductType } from "./product.interface";

export interface purchaseProductType {
  id: string;
  quantity_products: number;
  total_price: number;
  purchase: string[]; //PurchaseEntity;
  product: ProductType;
}
