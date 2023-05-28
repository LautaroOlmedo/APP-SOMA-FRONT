import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../pages/home/interfaces/product.interface";
import { loadProductsAction } from "../actions/products.actions";
import { createProductAction } from "../actions/products.actions";

interface initialState {
  productName: string;
  description: string;
  price: number;
  size: string | null;
  talle: string | null;
  code: number;
  category: string;
  quantity: number;
  stock: string;
}

export interface DataState {
  products: ProductType[] | any;
  loading: boolean;
  error: string | null;
}

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  } as DataState,

  reducers: {
    loadProducts: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadProductsSuccessful: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    loadProductsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Repite el mismo patrón para las acciones de cargarProductos y cargarTiendas
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProductsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(loadProductsAction.rejected, (state, action) => {
        state.loading = false; // Indicar que la carga se completó (con error)
        state.error = "Error"; // Actualizar el estado con el mensaje de error
      })

      // CREATE PROEDUCT
      .addCase(createProductAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProductAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products.push(action.payload);
      })
      .addCase(createProductAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const {
  loadProducts,
  loadProductsSuccessful,
  loadProductsError,
  // Exporta las acciones de cargarProductos y cargarTiendas
} = productSlice.actions;

export default productSlice.reducer;
