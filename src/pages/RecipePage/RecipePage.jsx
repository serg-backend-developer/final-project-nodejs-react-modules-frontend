import PathInfo from "../../components/RecipePage/PathInfo/PathInfo";
import RecipeInfo from "../../components/RecipePage/RecipeInfo/RecipeInfo"; // імпорт стилів
import style from "./RecipePage.module.css";



const RecipePage = () => {
  return (
    <main className="container">
      <section className={style.breadcrumbs}>
        <PathInfo />
      </section>

      <section className={style.recipeSection}>
        <RecipeInfo />
      </section>

      {/* <section className={style.popularSection}>
        <PopularRecipes />
      </section> */}
    </main>
  );
};

export default RecipePage;
