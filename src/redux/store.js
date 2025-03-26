import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import categoryReducer from "./categories/categorySlice";
import areasReducer from "./areas/areaSlice";
import ingredientsReducer from "./ingredients/ingredientSlice";
import recipeReducer from "./recipes/recipesSlice";

const recipeConfig = {
	key: "recipes",
	storage,
	whitelist: ["favoriteRecipes"],
};

const store = configureStore({
	reducer: {
		categories: categoryReducer,
		areas: areasReducer,
		ingredients: ingredientsReducer,
		recipes: persistReducer(recipeConfig, recipeReducer),
	},
});

export default store;
