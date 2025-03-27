import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./operations";

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
			}),
});

export const { selectRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
