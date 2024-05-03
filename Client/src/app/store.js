import { configureStore } from "@reduxjs/toolkit";
import productSlice from './features/product/productSlice'
import blogSlice from "./features/blog/blogSlice";
import authSlice from "./features/auth/authSlice";
import cartSlice from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    auth:authSlice,
    product:productSlice,
    blog:blogSlice,
    cart:cartSlice,
  },

  
});

export default store;