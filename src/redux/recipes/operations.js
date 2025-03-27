import axios from "axios";
import { toast } from "react-hot-toast";

import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getFavoriteRecipes = createAsyncThunk(
	"recipes/getFavoriteRecipes",
	async (ThunkAPI) => {
		try {
			const response = await axios.get(
				"https://project-team-04.onrender.com/api/users/favorites"
			);
			return response.data;
		} catch (error) {
			toast.error("Failed to load recipes!");
			return ThunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addFavoriteRecipe = createAsyncThunk(
	"recipes/addFavoriteRecipe",
	async (id, ThunkAPI) => {
		try {
			const response = await axios.post(
				`https://project-team-04.onrender.com/api/recipes/favorites/${id}`
			);
			return response.data;
		} catch (error) {
			toast.error("Failed to load favorite recipe!");
			return ThunkAPI.rejectWithValue(error.message);
		}
	}
);

export const removeFromFavoriteRecipe = createAsyncThunk(
	"recipes/removeFromFavoriteRecipe",
	async (id, ThunkAPI) => {
		try {
			const response = await axios.delete(
				`https://project-team-04.onrender.com/api/recipes/favorites/${id}`
			);
			return response.data;
		} catch (error) {
			toast.error("Failed to delete favorite recipe!");
			return ThunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchRecipes = createAsyncThunk(
	"recipes/fetchRecipes",
	async (_, ThunkAPI) => {
		try {
			let allRecipes = [];
			let page = 1;
			let hasMore = true;
			while (hasMore) {
				const response = await axios.get(
					`https://project-team-04.onrender.com/api/recipes?page=${page}`
				);

				const { recipes, totalPages } = response.data;
				allRecipes = [...allRecipes, ...recipes];

				if (page >= totalPages) {
					hasMore = false;
				} else {
					page++;
				}
			}
			console.log("fetchRecipes response", allRecipes);
			return allRecipes;
		} catch (error) {
			toast.error("Failed to load recipes!");
			return ThunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchByCategory",
  async (category, ThunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/recipes?category=${category}`);
      return response.data;
    } catch (error) {
      toast.error("Failed to load recipes!");
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);