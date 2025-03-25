import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipePreparation from "../RecipePreparation/RecipePreparation";

const RecipeInfo = ({ recipe }) => {
  return (
    <article>
      <RecipeMainInfo recipe={recipe} />
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipePreparation instructions={recipe.instructions} isFavorite={recipe.isFavorite} />
    </article>
  );
};

export default RecipeInfo;