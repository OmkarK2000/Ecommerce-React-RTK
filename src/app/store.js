import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../functions/cartSlice";

export const store = configureStore({
  reducer : {
    app : cartSlice
  }
})