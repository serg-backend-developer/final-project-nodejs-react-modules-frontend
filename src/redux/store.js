import { configureStore } from '@reduxjs/toolkit';
// import categoryReducer from './categorySlice';
import areasReducer from './areaSlice';
import ingredientsReducer from './ingredientSlice';
import categorySlice from "./categories/slice.js";

const store = configureStore({
  reducer: {
    categories: categorySlice,
    areas: areasReducer,
    ingredients: ingredientsReducer,
  },
});

export default store;
