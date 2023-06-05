export interface UserType {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
  username: string;
  dni: string;
  password: string;
  role: string;
  storesIncludes: string[]; // MODIFICAR POR INTERFACE DE STORES
  createdAt: string;
  updatedAt: string;
}
