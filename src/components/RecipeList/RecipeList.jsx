import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from './RecipeList.module.css';

import { getFavorites } from "../../redux/recipes/operations";
import Icon from "../Icon/Icon";
import MainTitle from "../MainTitle/MainTitle";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import Subtitle from "../Subtitle/Subtitle";
import { selectFavoriteRecipes } from "../../redux/recipes/selectors";


const RecipeList = ( ) => {
	const recipes = useSelector((state) => state.recipes.list.recipes) || [];
	console.log("Recipes from Redux:", recipes);

	const dispatch = useDispatch();
	const favoriteRecipes = useSelector(selectFavoriteRecipes);

	useEffect(() => {
		dispatch(getFavorites());
	}, [dispatch]);

	const isFavorite = (id) => {
		const isFavorite = favoriteRecipes.findIndex((recipe) => recipe.recipeId === id);
		return isFavorite !== -1;
	}

	if (!recipes || recipes.length === 0) {
        return <p>No recipes found.</p>;
    }

    return (
		<div className={css['recipe-list']}>
			<Link to="/categories" className={css.button_back}>
              <Icon iconId={"icon-arrow-back"} />
              <span>Back</span>
            </Link>
			<MainTitle>Recipes</MainTitle>
			<Subtitle>
				Go on a taste journey, where every sip is a sophisticated creative chord,
				and every dessert is an expression of the most refined gastronomic desires.
			</Subtitle>
			{
				recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} isFavorite={isFavorite(recipe.id)} />
				))
			}
		</div>
	);
};

export default RecipeList;