import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categories/slice.js";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
  },
});
