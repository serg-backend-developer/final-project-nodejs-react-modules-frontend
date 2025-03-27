import css from "./RecipeFilters.module.css";

import IngredientDropdown from "../IngredientDropdown/IngredientDropdown";
import AreaDropdown from "../AreaDropdown/AreaDropdown";

const RecipeFilters = () => {

  return (
    <div className={ css.container }>
      <IngredientDropdown />
      <AreaDropdown />
    </div>
  );
};

export default RecipeFilters;