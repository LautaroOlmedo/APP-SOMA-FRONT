import { UserType } from "./user.interface";

export interface StoreType {
  storeName: string;
  usersIncludes: UserType[];
  createdAt: string;
  updatedAt: string;
}
