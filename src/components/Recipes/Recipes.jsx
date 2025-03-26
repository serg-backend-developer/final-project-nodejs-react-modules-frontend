import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import MainTitle from "../MainTitle/MainTitle.jsx";
import Subtitle from "../Subtitle/Subtitle.jsx";
import RecipeList from "../RecipeList/RecipeList.jsx";
import RecipeFilters from "../RecipeFilters/RecipeFilters.jsx";

import style from '../App.module.css';
import css from "./Recipes.module.css";
import icons from "../../img/icons2.svg";

const Recipes = ({ category }) => {
	const categoriesListElement = useRef(null);
	const [recipes, setRecipes] = useState([]);
	const [total, setTotal] = useState(0);
	const [ingredientId, setIngredientId] = useState("");
	const [areaId, setAreaId] = useState("");
	const location = useLocation();

	// const getQueryParams = (search) => {
	//     return new URLSearchParams(search);
	// };

	// const queryParams = getQueryParams(location.search);
	// const page = queryParams.get("page") || 1;

	const handleChangeFilter = (selectedId, type) => {
		type === "ingredients"
			? setIngredientId(selectedId)
			: setAreaId(selectedId);
	};

	// const handlerChangeCategory = (category) => {
	//     setCategory(category);

	//     if (categoriesListElement.current) {
	//         setTimeout(() => {
	//             if (categoriesListElement.current) {
	//                 categoriesListElement.current.scrollIntoView({behavior: 'smooth'});
	//             }
	//         }, 100);
	//     }
	// };

	const isEmptyObject = (obj) => {
		return Object.keys(obj).length === 0 && obj.constructor === Object;
	};

	useEffect(() => {
		if (!category.id) {
			return;
		}
		const fetchRecipesByCategory = async () => {
			try {
				const url = `https://project-team-04.onrender.com/api/recipes`;
				// const url = `/api/recipes?page=${page}&limit=6&category=${category.id}`
				//     + (areaId ? `&area=${areaId}` : '')
				//     + (ingredientId ? `&ingredient=${ingredientId}` : '');
				const response = await axios.get(url);
				const filteredRecipes = response.data.recipes.filter(
					(recipe) => recipe.categoryId === category.id
				);
				setRecipes(filteredRecipes);
				setTotal(filteredRecipes.length);
			} catch (error) {
				setRecipes([]);
				setTotal(0);
			}
		};
		fetchRecipesByCategory();
	}, [category]);
	// }, [category, page, areaId, ingredientId]);

	return (
		<section>
			<div className={style.container}>
				{!isEmptyObject(category) && (
					<button className={css.btn}>
						<svg className={css.icon}>
							<use href={`${icons}#icon-arrow-up-right`}></use>
						</svg>
						back
					</button>
				)}
				<div ref={categoriesListElement}></div>
				<MainTitle>
					{isEmptyObject(category) ? "Categories" : category.name}
				</MainTitle>
				<Subtitle>
					{isEmptyObject(category)
						? `Discover a limitless world of culinary possibilities and enjoy
          exquisite recipes that combine taste, style and the warm atmosphere of
          the kitchen.`
						: `Go on a taste journey, where every sip is a sophisticated creative chord,
          and every dessert is an expression of the most refined gastronomic desires.`}
				</Subtitle>
				<div className={css["recipes-category"]}>
					<div>
						<RecipeFilters changeHandler={handleChangeFilter} />
					</div>
					<div>
						<div className={css["recipes-list"]}>
							<RecipeList recipes={recipes} />
							{recipes.length === 0 && (
								<div className={css["no-recipes"]}>
									<p>No recipes found</p>
								</div>
							)}
						</div>
						{/* <Pagination total={total} limit={6}/> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recipes;
