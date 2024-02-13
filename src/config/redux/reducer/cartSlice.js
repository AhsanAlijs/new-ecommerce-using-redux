import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({
        title: action.payload.title,
        price: action.payload.price,
        description: action.payload.description,
        image: action.payload.image,
        id: action.payload.id,
      });
    },
    removeCartItem: (state, action) => {
      state.cartItems.splice(action.payload.index, 1);
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
