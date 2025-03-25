import axios from "axios";
import { toast } from "react-hot-toast";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorites = createAsyncThunk(
	"recipes/getFavorites",
	async (ThunkAPI) => {
		try {
			const response = await axios.get(
				"https://project-team-04.onrender.com/api/recipes"
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
