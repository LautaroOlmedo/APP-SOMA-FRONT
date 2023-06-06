import { BrandType } from "./brand.interface";
import { UserType } from "./user.interface";

export interface StoreType {
  id: string;
  storeName: string;
  brand: BrandType;
  usersIncludes: UserType[];
  createdAt: string;
  updatedAt: string;
}
