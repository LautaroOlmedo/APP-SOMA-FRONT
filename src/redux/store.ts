import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices";
import productsSlice from "./slices/products.slice";
import { ProductType } from "../pages/home/interfaces/product.interface";
import usersSlice from "./slices/users.slice";
import { UserType } from "../pages/home/interfaces/user.interface";
import brandsSlice from "./slices/brand.slice";
import { BrandType } from "../pages/home/interfaces/brand.interface";
import storesSlice from "./slices/store.slice";
import { StoreType } from "../pages/home/interfaces/store.interface";

//const thunk: ThunkMiddleware = thunkMiddleware;

export const store = configureStore({
  reducer: {
    prodcutReducer: productsSlice,
    user: usersSlice,
    brandReducer: brandsSlice,
    storeReducer: storesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export interface IRootState {
  product: ProductType;
  user: UserType;
  brand: BrandType;
  store: StoreType;
}
