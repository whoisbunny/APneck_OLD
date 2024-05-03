import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import categoryService from "./categoryService";

export const getCategories = createAsyncThunk(
  "category/get-categories",
  async (thunkAPI) => {
    try {
      return await categoryService.getcategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addcategory = createAsyncThunk("category/add-category", async (data, thunkAPI) => {
  try {
    return await categoryService.addcategory(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const editcategory = createAsyncThunk("category/edit-category", async (data, thunkAPI) => {
  try {
    return await categoryService.editcategory(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const deletecategory = createAsyncThunk(
  "category/delete-category",
  async (data, thunkAPI) => {
    try {
      return await categoryService.delcategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getcategory = createAsyncThunk("category/get-category", async (data, thunkAPI) => {
  try {
    return await categoryService.getcategory(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    category: null,

    addModal: false,
    editModal: false,
    isLoading: false,
    editItem: {},
  },
  reducers: {
    // open add modal
    openAddModal: (state, action) => {
      state.addModal = action.payload;
    },

    updatecategory: (state, action) => {
      state.editModal = !state.editModal;
      state.editItem = action.payload;
    },

    closeEditModal: (state, action) => {
      state.editModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {})
      .addCase(addcategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addcategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newcategory = action.payload?.categories;

        toast.success(action.payload.message);
      })
      .addCase(addcategory.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload?.response?.data?.message);
      })
      .addCase(deletecategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletecategory.fulfilled, (state, action) => {
        state.isLoading = false;

        toast.success(action.payload.message);
      })
      .addCase(deletecategory.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload?.response?.data?.message);
      })
      .addCase(editcategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editcategory.fulfilled, (state, action) => {
        state.isLoading = false;

        state.editItem = {};
        toast.success(action.payload.message);
      })
      .addCase(editcategory.rejected, (state, action) => {
        state.isLoading = false;
        state.editItem = {};
        toast.error(action.payload?.response?.data?.message);
      })
      .addCase(getcategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getcategory.fulfilled, (state, action) => {
        state.isLoading = false;

        state.category = action.payload;
      })
      .addCase(getcategory.rejected, (state, action) => {
        state.isLoading = false;
        state.category = null;
        toast.error(action.payload?.response?.data?.message);
      });
  },
});

export const { openAddModal, updatecategory, closeEditModal } = categorySlice.actions;
export default categorySlice.reducer;
