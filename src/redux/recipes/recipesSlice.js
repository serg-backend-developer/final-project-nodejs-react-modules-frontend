import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes, fetchRecipesByCategory } from "./operations";

const recipeSlice = createSlice({
	name: "recipes",
	initialState: {
		list: [],
		selectedRecipe: "",
		status: "idle",
		error: null,
	},
	reducers: {
		selectRecipe: (state, action) => {
			state.selectedRecipe = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchRecipes.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchRecipes.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = action.payload;
			})
			.addCase(fetchRecipesByCategory.pending, (state) => {
        		state.error = null;
      		})
      		.addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        		state.list = action.payload;
      		})
      		.addCase(fetchRecipesByCategory.rejected, (state, action) => {
        		state.error = action.payload;
      		})
});

export const { selectRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
