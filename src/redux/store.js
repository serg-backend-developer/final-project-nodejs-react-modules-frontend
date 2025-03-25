import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './categories/categorySlice';
import areasReducer from './areaSlice';
import ingredientsReducer from './ingredientSlice';
import recipeReducer from './recipes/recipesSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    areas: areasReducer,
    ingredients: ingredientsReducer,
    recipes: recipeReducer,
  },
});

export default store;
