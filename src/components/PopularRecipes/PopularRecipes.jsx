import css from "./PopularRecipes.module.css";
import style from "../App.module.css";
import MainTitle from "../MainTitle/MainTitle";
import RecipeList from "../RecipeList/RecipeList";


const PopularRecipes = () => {
    return (
        <section className={css["popular-section"]}>
            <div className={style.container}>
                <MainTitle>Popular recipes</MainTitle>
                <RecipeList />
            </div>
        </section>
    )
}

export default PopularRecipes;