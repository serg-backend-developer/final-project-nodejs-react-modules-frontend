import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (ThunkAPI) => {
    try {
      const response = await axios.get('https://project-team-04.onrender.com/api/ingredients');
      return response.data;
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState: {
    list: [],
    selectedIngredient: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    selectIngredient: (state, action) => {
      state.selectedIngredient= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectIngredient} = ingredientSlice.actions;
export default ingredientSlice.reducer;