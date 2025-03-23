import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../api/categories.js";
import { toast } from "react-hot-toast";

export const loadCategories = createAsyncThunk(
  "categories/loadCategories",
  async (thunkAPI) => {
    try {
      const items = await fetchCategories();
      return { items };
    } catch (error) {
      toast.error("Failed to load categories!");
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
