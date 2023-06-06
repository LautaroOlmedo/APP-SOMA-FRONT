import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StoreType } from "../../pages/home/interfaces/store.interface";
import { loadStoresAction } from "../actions/stores.actions";

export interface DataStateStore {
  stores: StoreType[] | any;
  loading: boolean;
  error: string | null;
}

const storesSlice = createSlice({
  name: "store",
  initialState: {
    stores: [],
    loading: false,
    error: null,
  } as DataStateStore,
  reducers: {
    loadStores: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadStoresSuccessful: (state, action: PayloadAction<StoreType[]>) => {
      state.stores = action.payload;
      state.loading = false;
    },
    loadStoresError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadStoresAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadStoresAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.stores = action.payload;
      })
      .addCase(loadStoresAction.rejected, (state, action) => {
        state.loading = false; // Indicar que la carga se completó (con error)
        state.error = "Error"; // Actualizar el estado con el mensaje de error
      });
  },
});

export const {
  loadStores,
  loadStoresSuccessful,
  loadStoresError,
  // Exporta las acciones de cargarProductos y cargarTiendas
} = storesSlice.actions;

export default storesSlice.reducer;
