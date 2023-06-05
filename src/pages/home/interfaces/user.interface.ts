import { BrandType } from "./brand.interface";
import { StoreType } from "./store.interface";

export interface UserType {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
  username: string;
  dni: string;
  password: string;
  role: string;
  brand: BrandType;
  storesIncludes: StoreType[]; // MODIFICAR POR INTERFACE DE STORES
  createdAt: string;
  updatedAt: string;
}
