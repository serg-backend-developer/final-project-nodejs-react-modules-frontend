import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeCard } from "../RecipeCard/RecipeCard";
import { fetchRecipes } from "../../redux/recipes/operations";
import { selectFavoriteRecipes } from "../../redux/recipes/selectors";

import css from "./RecipeList.module.css";

const RecipeList = ({ recipes }) => {
	const dispatch = useDispatch();
	const favoriteRecipes = useSelector(selectFavoriteRecipes);

	useEffect(() => {
		dispatch(fetchRecipes());
	}, [dispatch]);

	const isFavorite = (id) => {
		const isFavorite = favoriteRecipes.findIndex(
			(recipe) => recipe.recipeId === id
		);
		return isFavorite !== -1;
	};

	return (
		<div className={css["recipes-list"]}>
			{recipes.map((recipe) => (
				<RecipeCard
					key={recipe.id}
					recipe={recipe}
					isFavorite={isFavorite(recipe.id)}
				/>
			))}
		</div>
	);
};

export default RecipeList;
