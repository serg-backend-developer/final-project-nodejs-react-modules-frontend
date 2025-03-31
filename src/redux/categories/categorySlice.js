import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';


const categorySlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    selectedCategory: null,
    status: "idle",
    loading: false,
    error: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    resetSelectedCategory: (state) => {
      state.selectedCategory = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
          state.loading = true;
          state.status = "loading";
        })
      .addCase(fetchCategories.fulfilled, (state, action) => {
          state.loading = false;
          state.status = "succeeded";
          state.list = action.payload;
        })
      .addCase(fetchCategories.rejected, (state, action) => {
          state.loading = false;
          state.status = "failed";
          state.error = action.error.message;
        });
  },
});

export const selectLoading = (state) => state.categories.loading;
export const { selectCategory, resetSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;