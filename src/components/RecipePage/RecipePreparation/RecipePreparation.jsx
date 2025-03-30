import styles from './RecipePreparation.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteRecipe,
  removeFromFavoriteRecipe,
} from '../../../redux/recipes/operations';
import { getIsAuthenticated } from "../../../redux/auth/selectors";
import SignInModal from '../../SignInModal/SignInModal';
import SignUpModal from '../../SignUpModal/SignUpModal';

const RecipePreparation = ({ instructions, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isAuth = useSelector(getIsAuthenticated);
  const dispatch = useDispatch();

  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

	const handleAddToFavorite = async (recipeId) => {
		if (!isAuth) {
			setSignInOpen(true);
			return;
		}
    try {
      if (isFavorite) {
        dispatch(removeFromFavoriteRecipe(recipeId));
         setIsFavorite(false);
      } else {
        dispatch(addFavoriteRecipe(recipeId));
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Failed to update favorites:', error);
    }
	};

  const switchToSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  const switchToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  return (
    <div className={styles.preparationSection}>
      <h2 className={styles.title}>Recipe Preparation</h2>
      <p className={styles.instructions}>{instructions}</p>
      <button type="button" className={styles.favoriteBtn} onClick={() => handleAddToFavorite(recipeId)}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>

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
    </div>
  );
};

export default RecipePreparation;
