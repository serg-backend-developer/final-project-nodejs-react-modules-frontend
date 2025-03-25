const RecipePreparation = ({ instructions, isFavorite }) => {
  const handleClick = () => {
    // Тут буде запит до бекенду: додати або видалити з улюблених
  };

  return (
    <section>
      <h2>Recipe Preparation</h2>
      <p>{instructions}</p>
      <button type="button" onClick={handleClick}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </section>
  );
};

export default RecipePreparation;