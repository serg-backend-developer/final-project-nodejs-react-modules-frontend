export const selectFavoriteRecipes = (state) => state.favorites.favoriteRecipes;
export const selectIsLoadingFavorite = (state) =>
	state.recipes.isLoadingFavorite;
export const selectLoading = (state) => state.recipes.loading;
