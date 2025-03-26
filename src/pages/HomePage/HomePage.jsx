import { useState } from "react";

import Hero from "../../components/Hero/Hero";
import styles from "./HomePage.module.css"
import Categories from "../../components/Categories/Categories";
import Recipes from "../../components/Recipes/Recipes";

const HomePage = () => {
  const [category, setCategory] = useState({});

  return (
    <div className={styles.contentWrapper}>
      <Hero />
      <Categories onSelectCategory={setCategory}/>
      <Recipes category={category}/>
    </div>
  );
};

export default HomePage;
