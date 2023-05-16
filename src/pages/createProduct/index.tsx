import React from "react";
import { CategoryType } from "../home/interfaces/category.interface";

type CreateProductType = {
  productName: string;
  description: string;
  price: number;
  size?: string;
  talle?: string;
  code: number;
  category: string;
  //purchaseProduct: PurchaseProductsEntity[];
  //stocksIncludes: StockProductsEntity[];
};

export const CreateProductsPage: React.FC<any> = ({ stockId }) => {
  const [loginProduct, setLoginProduct] = React.useState<CreateProductType>({
    productName: "",
    description: "",
    price: 0,
    size: "",
    talle: "",
    code: 0,
    category: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginProduct({ ...loginProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {};
  return <div></div>;
};
