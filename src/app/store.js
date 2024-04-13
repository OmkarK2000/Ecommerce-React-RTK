import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../functions/productsSlice"
import cartReducer from "../functions/cartSlice"
import favouriteReducer from "../functions/favouriteSlice"

export const store = configureStore({
  reducer : {
    products : productsReducer,
    cart : cartReducer,
    favourite : favouriteReducer,
  }
})