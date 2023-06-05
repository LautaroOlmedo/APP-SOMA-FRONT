import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices";
import productsSlice from "./slices/products.slice";
import { ProductType } from "../pages/home/interfaces/product.interface";
import usersSlice from "./slices/user.slice";
import { UserType } from "../pages/home/interfaces/user.interface";

//const thunk: ThunkMiddleware = thunkMiddleware;

export const store = configureStore({
  reducer: {
    prodcutReducer: productsSlice,
    user: usersSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export interface IRootState {
  product: ProductType;
  user: UserType;
}
