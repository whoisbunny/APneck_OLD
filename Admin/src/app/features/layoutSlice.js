import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
}


const initialDarkMode = () => {
  const item = window.localStorage.getItem("darkMode");
  return item ? JSON.parse(item) : false;
};
export const layoutSlice = createSlice({

  name: "layout",
  initialState,
  reducers: {
    // handle dark mode
    handleDarkMode: (state, action) => {
      state.darkMode = action.payload;
    //   window.localStorage.setItem("darkMode", action.payload);
    },
    
  },
});

export const {
  handleDarkMode,
} = layoutSlice.actions;

export default layoutSlice.reducer;
