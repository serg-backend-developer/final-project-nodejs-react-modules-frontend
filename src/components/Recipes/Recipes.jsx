import { useEffect, useRef, useState } from "react";

import MainTitle from "../MainTitle/MainTitle.jsx";
import Subtitle from "../Subtitle/Subtitle.jsx";
import RecipeList from "../RecipeList/RecipeList.jsx";
import RecipeFilters from "../RecipeFilters/RecipeFilters.jsx";
import categoryDescriptions from "../../constants/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesByCategory } from "../../redux/recipes/operations.js";
import { selectArea } from '../../redux/areas/areaSlice';
import { selectIngredient } from '../../redux/ingredients/ingredientSlice';
import { selectCategory } from "../../redux/categories/categorySlice";
import Pagination from "../Pagination/Pagination.jsx"
import { fetchRecipesByFilters } from "../../redux/recipes/operations.js";

import style from '../App.module.css';
import css from "./Recipes.module.css";
import icons from "../../img/icons2.svg";
import { useLocation, useNavigate } from "react-router";


const Recipes = () => {
	const categoriesListElement = useRef(null);
	const navigate = useNavigate()
	const location = useLocation();
	const dispatch = useDispatch();
	const selectedCategory = useSelector((state) => state.categories.selectedCategory);
	const selectedArea = useSelector((state) => state.areas.selectedArea);
	const selectedIngredient = useSelector((state) => state.ingredients.selectedIngredient);
	const recipes = useSelector((state) => state.recipes.list);
	const prevLocation = location.state || "/";
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [recipesPerPage, setRecipesPerPage] = useState(12);

	useEffect(() => {
		const windowWidth = window.innerWidth;
		console.log("window", windowWidth);
		setRecipesPerPage(windowWidth < 768 ? 8 : 12);
		console.log(`Fetching recipes with size: ${recipesPerPage}`);
	}, [recipesPerPage]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		// dispatch(fetchRecipesByCategory({ category: selectedCategory, page }));
	};

	const handleClick = () => {
		navigate(prevLocation);
		dispatch(selectArea(""));
		dispatch(selectIngredient(""));
		dispatch(selectCategory(""));
  	};

	useEffect(() => {
		if (selectedCategory) {
			console.log(`Fetching recipes by category with size: ${recipesPerPage}`);
			dispatch(fetchRecipesByCategory({
				category: selectedCategory,
				page: currentPage,
				size: recipesPerPage
			})).then(response => {
				console.log('Server response', response);
			});
		}
	}, [dispatch, selectedCategory, currentPage, recipesPerPage]);

	useEffect(() => {
		if (selectedCategory) {
			console.log(`Fetching recipes by filters with size: ${recipesPerPage}`);
			dispatch(fetchRecipesByFilters({
				category: selectedCategory,
				area: selectedArea,
				ingredient: selectedIngredient,
				page: currentPage,
				size: recipesPerPage,
			}));
		}
	}, [dispatch, selectedCategory, selectedArea, selectedIngredient, currentPage, recipesPerPage]);

	const isEmptyObject = (obj) => {
		return Object.keys(obj).length === 0 && obj.constructor === Object;
	};

	useEffect(() => {
		if (recipes.totalPages) {
			setTotalPages(recipes.totalPages);
		}
	}, [recipes]);

	return (
		<section className={css["recipes-section"]}>
			<div className={style.container}>
				{!isEmptyObject(selectedCategory) && (
					<button className={css.btn} onClick={handleClick}>
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
						<RecipeFilters currentPage={currentPage} size={recipesPerPage} />
					</div>
					<div>
						{recipes.recipes? (
        					<RecipeList recipes={recipes.recipes} />
      					) : (
        					<p>No recipes found for this category.</p>
      					)}
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recipes;
