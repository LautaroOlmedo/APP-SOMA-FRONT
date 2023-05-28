import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../pages/home/interfaces/user.interface";
import { loadUsersAction } from "../actions/users.actions";

export interface DataState {
  users: UserType[] | any;
  loading: boolean;
  error: string | null;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  } as DataState,
  reducers: {
    loadUsers: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadUsersSuccessful: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
      state.loading = false;
    },
    loadUsersError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsersAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUsersAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(loadUsersAction.rejected, (state, action) => {
        state.loading = false; // Indicar que la carga se completó (con error)
        state.error = "Error"; // Actualizar el estado con el mensaje de error
      });
  },
});

export const {
  loadUsers,
  loadUsersSuccessful,
  loadUsersError,
  // Exporta las acciones de cargarProductos y cargarTiendas
} = userSlice.actions;

export default userSlice.reducer;
