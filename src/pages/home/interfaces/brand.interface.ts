import { StoreType } from "./store.interface";
import { UserType } from "./user.interface";

export interface BrandType {
  brandName: string;
  webSite: string;
  image: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  users: UserType[];
  stores: StoreType[];
}
