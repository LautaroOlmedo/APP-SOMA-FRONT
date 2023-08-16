import { IBrand } from "./brand.interface";
import { IUser } from "./user.interface";

export interface StoreType {
  id: string;
  storeName: string;
  brand: IBrand;
  usersIncludes: IUser[];
  createdAt: string;
  updatedAt: string;
}
