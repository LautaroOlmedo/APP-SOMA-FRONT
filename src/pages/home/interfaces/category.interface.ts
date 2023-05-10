import { ProductType } from "./product.interface";

export interface CategoryType {
  categoryName: string;
  products: ProductType[];
}
