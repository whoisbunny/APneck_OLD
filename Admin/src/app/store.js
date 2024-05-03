import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./features/layoutSlice";
import productSlice from "./features/product/productSlice";
import authSlice from "./features/auth/authSlice";
import blogSlice from "./features/blog/blogSlice";

const store = configureStore({
  reducer: {
    auth:authSlice,
    product:productSlice,
    blog:blogSlice,
    layout:layoutSlice,

  },
});


export default store