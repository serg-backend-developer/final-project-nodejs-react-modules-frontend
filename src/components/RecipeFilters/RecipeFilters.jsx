import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./RecipeFilters.module.css";

import { fetchIngredients } from "../../redux/ingredients/ingredientSlice";
import { selectIngredients } from "../../redux/ingredients/selectors";
import { fetchAreas } from "../../redux/areas/areaSlice";
import { selectAreas } from "../../redux/areas/selectors";
import IngredientDropdown from "../IngredientDropdown/IngredientDropdown";
import AreaDropdown from "../AreaDropdown/AreaDropdown";

export const IngredientsFilters = ({ changeHandler }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const ingredients = useSelector(selectIngredients);

  const ingredientOptions = ingredients.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <IngredientDropdown
      options={ ingredientOptions }
      placeholder="Ingredients"
      onChange={(selectedOption) => changeHandler(selectedOption.value)}
    />
  );
};

export const AreaFilters = ({ changeHandler }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  const areas = useSelector(selectAreas);

  const areaOptions = areas.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <AreaDropdown
      options={ areaOptions }
      placeholder="Area"
      onChange={(selectedOption) => changeHandler(selectedOption.value)}
    />
  );
};

const RecipeFilters = ({ changeHandler }) => {
  const handleSelectChangeIngredient = ( selectedId ) => {
    changeHandler(selectedId, "ingredients");
  };
  const handleSelectChangeArea = ( selectedId ) => {
    changeHandler(selectedId, "areas");
  };

  return (
    <div className={ css.container }>
      <IngredientsFilters changeHandler={ handleSelectChangeIngredient } />
      <AreaFilters changeHandler={ handleSelectChangeArea } />
    </div>
  );
};

export default RecipeFilters;