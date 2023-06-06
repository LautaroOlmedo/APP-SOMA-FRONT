import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BrandType } from "../../pages/home/interfaces/brand.interface";
import { loadBrandsAction } from "../actions/brands.actions";

export interface DataStateBrand {
  brands: BrandType[] | any;
  loading: boolean;
  error: string | null;
}

const brandsSlice = createSlice({
  name: "brand",
  initialState: {
    brands: [],
    loading: false,
    error: null,
  } as DataStateBrand,
  reducers: {
    loadBrands: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadBrandsSuccessful: (state, action: PayloadAction<BrandType[]>) => {
      state.brands = action.payload;
      state.loading = false;
    },
    loadBrandsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBrandsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadBrandsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(loadBrandsAction.rejected, (state, action) => {
        state.loading = false; // Indicar que la carga se completó (con error)
        state.error = "Error"; // Actualizar el estado con el mensaje de error
      });
  },
});

export const {
  loadBrands,
  loadBrandsSuccessful,
  loadBrandsError,
  // Exporta las acciones de cargarProductos y cargarTiendas
} = brandsSlice.actions;

export default brandsSlice.reducer;
