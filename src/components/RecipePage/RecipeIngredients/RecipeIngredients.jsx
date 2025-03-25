const RecipeIngredients = ({ ingredients }) => {
  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, idx) => (
          <li key={idx}>
            <img src={item.image || "placeholder.png"} alt={item.name} />
            <span>{item.name}</span> — <span>{item.quantity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeIngredients;