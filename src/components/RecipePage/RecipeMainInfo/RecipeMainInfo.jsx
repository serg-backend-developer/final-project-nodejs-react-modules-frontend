const RecipeMainInfo = ({ recipe }) => {
  return (
    <section>
      <img src={recipe.image} alt={recipe.title} />
      <h1>{recipe.title}</h1>
      <p>{recipe.category}</p>
      <p>{recipe.description}</p>

      <button type="button">
        {/* Логіка з модалкою*/}
        Author: {recipe.author.name}
      </button>
    </section>
  );
};

export default RecipeMainInfo;