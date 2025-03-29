import styles from './RecipePreparation.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addFavoriteRecipe,
  removeFromFavoriteRecipe,
} from '../../../redux/recipes/operations'; 


const RecipePreparation = ({ instructions, isFavorite: initialFavorite, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      navigate('/signin'); 
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

  return (
    <section className={styles.preparationSection}>
      <h2 className={styles.title}>Recipe Preparation</h2>
      <p className={styles.instructions}>{instructions}</p>
      <button type="button" className={styles.favoriteBtn} onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </section>
  );
};

export default RecipePreparation;
