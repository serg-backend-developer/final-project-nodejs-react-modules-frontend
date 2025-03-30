import styles from './RecipePreparation.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteRecipe,
  removeFromFavoriteRecipe,
} from '../../../redux/recipes/operations';
import SignInModal from '../../SignInModal/SignInModal';
import SignUpModal from '../../SignUpModal/SignUpModal';

const RecipePreparation = ({ instructions, isFavorite: initialFavorite, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      setSignInOpen(true);
      return;
    }

    try {
      if (isFavorite) {
        await dispatch(removeFromFavoriteRecipe(recipeId)).unwrap();
      } else {
        await dispatch(addFavoriteRecipe(recipeId)).unwrap();
      }
      setIsFavorite(prev => !prev);
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
    <section className={styles.preparationSection}>
      <h2 className={styles.title}>Recipe Preparation</h2>
      <p className={styles.instructions}>{instructions}</p>
      <button type="button" className={styles.favoriteBtn} onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>

      {/* Модалки */}
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
    </section>
  );
};

export default RecipePreparation;
