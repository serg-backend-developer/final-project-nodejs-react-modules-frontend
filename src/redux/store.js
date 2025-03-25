import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categorySlice';
import areasReducer from './areaSlice';
import ingredientsReducer from './ingredientSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    areas: areasReducer,
    ingredients: ingredientsReducer,
  },
});

export default store;
