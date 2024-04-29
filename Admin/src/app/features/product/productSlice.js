import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import productService from "./productService";

export const getProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addProducts = createAsyncThunk(
  "product/add-products",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      return await productService.addProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteProducts = createAsyncThunk(
  "product/delete-products",
  async (data, thunkAPI) => {
    try {
      return await productService.deleteProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const editProducts = createAsyncThunk(
  "product/update-products",
  async (data, thunkAPI) => {
    try {
      return await productService.updateProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getProduct = createAsyncThunk(
  "product/get-product",
  async (data, thunkAPI) => {
    try {
      return await productService.getProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
      products: [],
    openProductModal: false,
    isLoading: null,
    editItem: {},
    product: {},
    editModal: false,
  },
  reducers: {
    toggleAddModal: (state, action) => {
      state.openProductModal = action.payload;
    },
    toggleEditModal: (state, action) => {
      state.editModal = action.payload;
    },

    updateProduct: (state, action) => {
      // update project and  store it into editItem when click edit button

      state.editItem = action.payload;
      state.editModal = !state.editModal;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = null;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload?.response?.data?.message);
      })
      .addCase(addProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newProduct = action.payload;
        toast.success(action.payload?.message);
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload?.response?.data?.message);
      })
      .addCase(editProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProducts.fulfilled, (state, action) => {
        state.isLoading = false;

        state.editItem = {};
        toast.success(action.payload.message);
      })
      .addCase(editProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.editItem = {};
        toast.error(action.payload?.response?.data?.message);
      })
      .addCase(deleteProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.isLoading = false;

        toast.success(action.payload.message);
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload?.response?.data?.message);
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload?.response?.data?.message);
      });
  },
});

export const { toggleAddModal, toggleEditModal, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
