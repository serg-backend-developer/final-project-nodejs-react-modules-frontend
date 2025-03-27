import { useEffect, useRef} from "react";

import MainTitle from "../MainTitle/MainTitle.jsx";
import Subtitle from "../Subtitle/Subtitle.jsx";
import RecipeList from "../RecipeList/RecipeList.jsx";
import RecipeFilters from "../RecipeFilters/RecipeFilters.jsx";
import categoryDescriptions from "../../constants/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesByCategory } from "../../redux/recipes/operations.js";

import style from '../App.module.css';
import css from "./Recipes.module.css";
import icons from "../../img/icons2.svg";


const Recipes = () => {
	const categoriesListElement = useRef(null);

	const dispatch = useDispatch();
  	const selectedCategory = useSelector((state) => state.categories.selectedCategory);
	const recipes = useSelector((state) => state.recipes.list);
	
	useEffect(() => {
    	if (selectedCategory) {
      dispatch(fetchRecipesByCategory(selectedCategory));
    	}
  	}, [dispatch, selectedCategory]);

	const isEmptyObject = (obj) => {
		return Object.keys(obj).length === 0 && obj.constructor === Object;
	};

	return (
		<section className={css["recipes-section"]}>
			<div className={style.container}>
				{!isEmptyObject(selectedCategory) && (
					<button className={css.btn}>
						<svg className={css.icon}>
							<use href={`${icons}#icon-arrow-up-right`}></use>
						</svg>
						back
					</button>
				)}
				<div ref={categoriesListElement}></div>
				<MainTitle>
					{isEmptyObject(selectedCategory) ? "Categories" : selectedCategory}
				</MainTitle>
				<Subtitle>
					{categoryDescriptions[selectedCategory]}
				</Subtitle>
				<div className={css["recipes-category"]}>
					<div>
						<RecipeFilters />
					</div>
					<div>
						{recipes.recipes? (
        					<RecipeList recipes={recipes.recipes} />
      					) : (
        					<p>No recipes found for this category.</p>
      					)}
						{/* <Pagination total={total} limit={6}/> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recipes;
