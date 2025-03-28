import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeCard } from "../RecipeCard/RecipeCard";
import { selectFavoriteRecipes } from "../../redux/recipes/selectors";
import { getFavoriteRecipes } from "../../redux/recipes/operations";

import css from "./RecipeList.module.css";

const RecipeList = ({ recipes }) => {
	console.log("recipes", recipes);
	const dispatch = useDispatch();
	const favoriteRecipes = useSelector(selectFavoriteRecipes);
	console.log("favoriteRecipes", favoriteRecipes);

	useEffect(() => {
		dispatch(getFavoriteRecipes());
	}, [dispatch]);

	const isFavorite = (id) => {
		if (!favoriteRecipes || !Array.isArray(favoriteRecipes.recipes)) {
			return false;
		}
		const isFavorite = favoriteRecipes.recipes.findIndex(
			(recipe) => recipe.recipeId === id
		);
		return isFavorite !== -1;
	};

	return (
		<ul className={css["recipes-list"]}>
			{recipes.map((recipe) => (
				<li key={recipe.id} className={css["recipes-item"]}>
					<RecipeCard
						recipe={recipe}
						isFavorite={isFavorite(recipe.id)}
					/>
				</li>
			))}
		</ul>
	);
};

export default RecipeList;
