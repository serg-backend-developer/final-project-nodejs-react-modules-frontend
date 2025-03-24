
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-hot-toast";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (ThunkAPI) => {
    try {
      const response = await axios.get('https://project-team-04.onrender.com/api/categories');
      return response.data;
    } catch (error) {
      toast.error("Failed to load categories!");
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);