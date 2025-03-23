import { createSlice } from "@reduxjs/toolkit";
import { loadCategories } from "./operations.js";

const initialState = {
  items: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      const { items } = action.payload;
      state.items = [...items];
    });
  },
  selectors: {
    selectCategories: ({ items }) => items,
  },
});

export const { selectCategories } = categoriesSlice.selectors;

export default categoriesSlice.reducer;
