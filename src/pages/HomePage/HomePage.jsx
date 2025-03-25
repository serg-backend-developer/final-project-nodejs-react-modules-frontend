import Hero from "../../components/Hero/Hero";
import styles from "./HomePage.module.css"
import Categories from "../../components/Categories/Categories";
import RecipeList from "../../components/RecipeList/RecipeList";

const HomePage = () => {
  return (
    <div className={styles.contentWrapper}>
      <Hero />
      <Categories />
      <RecipeList />
    </div>
  );
};

export default HomePage;
