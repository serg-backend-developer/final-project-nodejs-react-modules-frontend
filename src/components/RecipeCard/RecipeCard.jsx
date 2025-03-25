import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

import icons from "../../img/icons.svg";
import css from "./RecipeCard.module.css";
import noImage from "../../img/empty/no-image.png";
import noAvatar from "../../img/empty/no-avatar.jpg";
import { defaultUserName } from "../../constants/constants";

// import { selectAuthIsSignedIn } from "../../redux/auth/selectors";
import RecipeCardFavoriteButton from "../RecipeCardFavoriteButton/RecipeCardFavoriteButton";

export const RecipeCard = ({ recipe, isFavorite }) => {
	// const isSignIn = useSelector(selectAuthIsSignedIn);
	console.log(recipe.ownerId.avatar);
	return (
		<div className={css.card}>
			<img
				className={css.image}
				src={recipe?.thumb ? `${recipe.thumb.startsWith("http") ? recipe.thumb : process.env.REACT_APP_BASE_URL + recipe.thumb}` : noImage}
				alt={recipe.title}
			/>
			<h3 className={css.title}>{recipe.title}</h3>
			<p className={css.text}>{recipe.description}</p>

			<div className={css.info}>
				<div className={css.userInfo}>
					<div className={css.avatarContainer}>
						<img
							className={css.avatar}
							src={ noAvatar}
							alt={defaultUserName}
						/>
					</div>
					<h4 className={css.name}>{defaultUserName}</h4>
				</div>

				<div className={css.buttons}>
					{/* {isSignIn ? <RecipeCardFavoriteButton idRecipe={recipe.id} favorite={isFavorite}/> : <></>} */}
					<RecipeCardFavoriteButton idRecipe={recipe.id} favorite={isFavorite}/>

					<NavLink
						to={`/recipe/${recipe.id}`}
						className={css.btn}
						type="button">
						<svg className={css.icon}>
							<use href={`${icons}#icon-arrow-up-right`}></use>
						</svg>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
