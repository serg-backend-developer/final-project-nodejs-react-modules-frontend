import { createSlice } from "@reduxjs/toolkit";
import {
	addFavoriteRecipe,
	removeFromFavoriteRecipe,
	getFavorites,
} from "./operations";

const initialState = {
	selectedRecipe: "",
	list: [],
	myFavorites: {
		total: 0,
		list: [],
	},
	recipes: {
		total: 0,
		result: [],
	},
	isLoadingFavorite: false,
	isErrorFavorite: null,
	isLoading: false,
	isError: null,
	popularRecipes: [],
	isLoadingPopular: false,
	isErrorPopular: null,
	recipeCreate: {
		lastCreatedRecipe: null,
		isLoading: false,
		isError: null,
	},
	recipeDelete: {
		isLoading: false,
		isError: null,
	},
	queryRecipes: {
		isLoading: false,
		isError: null,
		result: {
			total: 0,
			recipes: [],
		},
	},
};

const recipeSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		selectRecipe: (state, action) => {
			state.selectedRecipe = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(getFavorites.pending, (state, action) => {
				state.isLoading = true;
				state.isError = null;
			})
			.addCase(getFavorites.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.payload;
			})
			.addCase(getFavorites.fulfilled, (state, action) => {
				state.isLoading = false;
				state.list = action.payload;
			})
			.addCase(addFavoriteRecipe.pending, (state, action) => {
				state.isLoadingFavorite = true;
				state.isErrorFavorite = null;
			})
			.addCase(addFavoriteRecipe.rejected, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = action.payload;
			})
			.addCase(addFavoriteRecipe.fulfilled, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = null;
			})
			.addCase(removeFromFavoriteRecipe.pending, (state, action) => {
				state.isLoadingFavorite = true;
				state.isErrorFavorite = null;
			})
			.addCase(removeFromFavoriteRecipe.rejected, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = action.payload;
			})
			.addCase(removeFromFavoriteRecipe.fulfilled, (state, action) => {
				state.isLoadingFavorite = false;
				state.isErrorFavorite = null;
			}),
});

export const { selectRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
