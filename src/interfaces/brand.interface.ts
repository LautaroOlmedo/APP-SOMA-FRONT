import { StoreType } from "./store.interface";
import { IUser } from "./user.interface";

export interface IBrand {
  brandName: string;
  webSite: string;
  image: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  users: IUser[];
  stores: StoreType[];
}
