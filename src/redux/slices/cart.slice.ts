import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartAddState {
  id: string | number;
  product_name: string;
  info: string;
  image: string | null;
}

interface CartRemoveState {
  id: string | number;
  product_name: string;
  info: string;
  image: string | null;
}

const initialState: CartAddState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartAddState>) => {
      if (
        state.length === 0 ||
        state.filter((item) => item.id === action.payload.id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>) => {},
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
