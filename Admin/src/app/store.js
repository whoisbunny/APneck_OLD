import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./features/layoutSlice";
import productSlice from "./features/product/productSlice";
import authSlice from "./features/auth/authSlice";
import blogSlice from "./features/blog/blogSlice";
import categorySlice from "./features/category/categorySlice";

const store = configureStore({
  reducer: {
    auth:authSlice,
    product:productSlice,
    blog:blogSlice,
    layout:layoutSlice,
    category:categorySlice

  },
});


export default store