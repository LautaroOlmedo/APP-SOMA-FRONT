import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../../pages/home/interfaces/product.interface";

export const loadProductsAction = createAsyncThunk(
  "products/getAll",
  async () => {
    try {
      const response = await axios.get<ProductType[]>(
        "http://localhost:8000/api/products/all"
      );
      return response.data;
    } catch (e) {
      return "Error";
    }
  }
);

export const createProductAction = createAsyncThunk(
  "products/create",
  async (newProduct: ProductType) => {
    try {
      const response = await axios.post<ProductType>(
        "http://localhost:8000/api/products",
        newProduct
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  }
);
