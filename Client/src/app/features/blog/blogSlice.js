import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { blogService } from "./blogService";

export const getBlogs = createAsyncThunk(
  "blog/get-blogs",
  async (thunkAPI) => {
    try {
      return await blogService.getBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getBlog = createAsyncThunk(
  "blog/get-blog",
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    blog : ''
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state) => {
        state.isLoading = false;
        // toast.error(action.payload?.response?.data?.message);
      })



      
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state) => {
        state.isLoading = false;8
        // toast.error(action.payload?.response?.data?.message);
      });
  },
});

// export const {

// } = accountSlice.actions;
export default blogSlice.reducer;
