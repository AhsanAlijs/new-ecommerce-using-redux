import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/cartSlice";
import productSlice from "../reducer/productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cartItems: cartSlice,
  },
});
