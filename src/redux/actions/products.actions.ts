import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../../pages/home/interfaces/product.interface";
// import {
//   loadProductsError,
//   loadProductsSuccessful,
// } from "../slices/products.slice";

// export const loadProducts = createAction("data/cargarUsuarios");

// export const loadProductsAsync = () => {
//   return async (dispatch: Dispatch) => {
//     dispatch(loadProducts());

//     try {
//       const response = await axios.get<ProductType[]>(
//         "http://localhost:3000/usuarios"
//       ); // Reemplaza la URL con la ruta correcta del servidor
//       dispatch(loadProductsSuccessful(response.data));
//     } catch (error) {
//       dispatch(loadProductsError(error));
//     }
//   };
// };

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
