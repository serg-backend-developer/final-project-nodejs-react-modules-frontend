import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import icons from "../../img/icons2.svg";
import css from "./RecipeCard.module.css";
import noImage from "../../img/empty/no-image.png";
import noAvatar from "../../img/empty/no-avatar.jpg";
import { defaultUserName } from "../../constants/constants";

import RecipeCardFavoriteButton from "../RecipeCardFavoriteButton/RecipeCardFavoriteButton";
import { getIsAuthenticated } from "../../redux/auth/selectors";
import SignInModal from "../SignInModal/SignInModal";

export const RecipeCard = ({ recipe, isFavorite }) => {
	const isAuth = useSelector(getIsAuthenticated);
	const navigate = useNavigate();
	const [isSignInModalOpen, setSignInModalOpen] = useState(false);

	const handleClick = () => {
		navigate(`/recipe/${recipe.id}`);
	};

	const redirectToUserPage = () => {
		navigate(`/users/${recipe.ownerId}`);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleRedirectToUserPage = () => {
		if (isAuth) {
			redirectToUserPage();
			scrollToTop();
		} else {
			setSignInModalOpen(true);
		}
	};

	return (
		<>
			<div className={css.card}>
				<img
					className={css.image}
					src={
						recipe?.thumb
							? `${
									recipe.thumb.startsWith("http")
										? recipe.thumb
										: process.env.REACT_APP_BASE_URL +
										  recipe.thumb
							  }`
							: noImage
					}
					alt={recipe.title}
				/>
				<h3 className={css.title}>{recipe.title}</h3>
				<p className={css.text}>{recipe.description}</p>

				<div className={css.info}>
					<div
						className={css.userInfo}
						onClick={handleRedirectToUserPage}
					>
						<div className={css.avatarContainer}>
							<img
								className={css.avatar}
								src={recipe.owner?.avatar || noAvatar}
								alt={recipe.owner?.name || defaultUserName}
							/>
						</div>
						<h4 className={css.name}>
							{recipe.owner?.name || defaultUserName}
						</h4>
					</div>

					<div className={css.buttons}>
						<RecipeCardFavoriteButton
							idRecipe={recipe.id}
							favorite={isFavorite}
						/>
						<button
							onClick={handleClick}
							className={css.iconWrapper}
						>
							<svg>
								<use
									href={`${icons}#icon-arrow-up-right`}
								></use>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<SignInModal
				isOpen={isSignInModalOpen}
				onClose={() => setSignInModalOpen(false)}
			/>
		</>
	);
};

export default RecipeCard;
