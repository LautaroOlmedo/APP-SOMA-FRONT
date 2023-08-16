import { IProduct } from "./product.interface";

export interface ICategory {
  categoryName: string;
  products: IProduct[];
}
