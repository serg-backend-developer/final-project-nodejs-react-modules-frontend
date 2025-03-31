import { useDispatch } from "react-redux";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";
import RecipeInfo from "../../components/RecipePage/RecipeInfo/RecipeInfo";
import { fetchPopularRecipes } from "../../redux/popularRecipes/operations";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import style from "./RecipePage.module.css";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(fetchPopularRecipes());
  }, [dispatch]);

  useEffect(() => {
    scrollToTop();
  }, [id]);

  return (
    <>
      <RecipeInfo />
      <PopularRecipes />
    </>
  );
};

export default RecipePage;
