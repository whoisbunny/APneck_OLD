import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./features/layoutSlice";
import productSlice from "./features/product/productSlice";

const store = configureStore({
  reducer: {
    layout:layoutSlice,
    product:productSlice

  },
});


export default store