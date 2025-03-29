import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./RecipeCardFavoriteButton.module.css";

import icons from "../../img/icons2.svg";
import {
	addFavoriteRecipe,
	removeFromFavoriteRecipe,
} from "../../redux/recipes/operations";
import { selectIsLoadingFavorite } from "../../redux/recipes/selectors";
import { getIsAuthenticated } from "../../redux/auth/selectors";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";

function RecipeCardFavoriteButton({ idRecipe, favorite }) {
	const [isFavorite, setIsFavorite] = useState(favorite);
	const dispatch = useDispatch();
	const loading = useSelector(selectIsLoadingFavorite);
	const [isSignInOpen, setSignInOpen] = useState(false);
	const [isSignUpOpen, setSignUpOpen] = useState(false);
	const isAuth = useSelector(getIsAuthenticated);

	const handleAddToFavorite = async (id) => {
		if (loading) return;
		if (!isAuth) {
			setSignInOpen(true);
			return;
		}
		setIsFavorite(true);
		dispatch(addFavoriteRecipe(id));
	};

	const handleRemoveFromFavorite = async (id) => {
		if (loading) return;
		setIsFavorite(false);
		dispatch(removeFromFavoriteRecipe(id));
	};

	const switchToSignUp = () => {
    	setSignUpOpen(true);
    	setSignInOpen(false);
	};

	const switchToSignIn = () => {
    	setSignUpOpen(false);
    	setSignInOpen(true);
  	};

	return (
		<>
			{isFavorite ? (
				<button
					className={css.btn}
					type="button"
					onClick={() => handleRemoveFromFavorite(idRecipe)}
				>
					<svg className={css.icon}>
						<use href={`${icons}#icon-heart`}></use>
					</svg>
				</button>
			) : (
				<button
					className={css.btn}
					type="button"
					onClick={() => handleAddToFavorite(idRecipe)}
				>
					<svg className={css.icon}>
						<use href={`${icons}#icon-heart-outline`}></use>
					</svg>
				</button>
			)}
			<SignInModal
				isOpen={isSignInOpen}
				onClose={() => setSignInOpen(false)}
				onSwitchToSignUp={switchToSignUp}
			/>
			<SignUpModal
        		isOpen={isSignUpOpen}
        		onClose={() => setSignUpOpen(false)}
        		onSwitchToSignIn={switchToSignIn}
      		/>
		</>
	);
}

export default RecipeCardFavoriteButton;
