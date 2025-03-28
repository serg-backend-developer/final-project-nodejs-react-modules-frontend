import React from 'react';
import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import styles from "./RecipeInfo.module.css";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipePreparation from "../RecipePreparation/RecipePreparation";
import img1 from "../../../img/image.png"

const mockRecipe = {
  image: "/img/salmon.jpg",
  title: "Salmon Avocado Salad",
  category: "Seafood",
  time: "40 min",
  description:
    "A healthy salad recipe that's big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.",
  author: {
    name: "Nadia",
    avatar: "/img/author-avatar.png",
    id: "user123",
  },
  ingredients: [
    {
      id: 1,
      name: "Salmon",
      quantity: "400 g",
      image: "/img/ingredients/salmon.png",
    },
    {
      id: 2,
      name: "Avocado",
      quantity: "3",
      image: "/img/ingredients/avocado.png",
    },
    {
      id: 3,
      name: "Cucumber",
      quantity: "1",
      image: "/img/ingredients/cucumber.png",
    },
    {
      id: 4,
      name: "Spinach",
      quantity: "400 g",
      image: "/img/ingredients/spinach.png",
    },
    {
      id: 5,
      name: "Mint",
      quantity: "4 tbs",
      image: "/img/ingredients/mint.png",
    },
    { id: 6, name: "Lime", quantity: "1", image: "/img/ingredients/lime.png" },
    {
      id: 7,
      name: "Honey",
      quantity: "2 tsp",
      image: "/img/ingredients/honey.png",
    },
    {
      id: 8,
      name: "Olive oil",
      quantity: "3 tbs",
      image: "/img/ingredients/olive-oil.png",
    },
  ],
  instructions:
    "Then drizzled with a homemade lemon vinaigrette. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.",
  isFavorite: false,
};

const RecipeInfo = () => {
  const { title, category, time, description, author, ingredients, instructions } = mockRecipe;

  return (
    <section className={styles.section}>
      <img className={styles.image} src={img1} alt={title} />

      <div className={styles.content}>
        <RecipeMainInfo
          title={title}
          category={category}
          time={time}
          description={description}
          author={author}
        />

        <div className={styles.recipeLayout}>
          <RecipeIngredients ingredients={ingredients} />
          <RecipePreparation instructions={instructions} />
        </div>
      </div>
    </section>
  );
};

export default RecipeInfo;