import { MdOutlineArrowOutward } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
import style from "./RecipePreview.module.css";

const RecipePreview = ({ recipe }) => {
  const { id, title, description, thumb } = recipe;

  return (
    <div className={style.recipeCard}>
      <div className={style.imageContainer}>
        <img src={thumb} alt={title} className={style.image} />
      </div>

      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>

      <div className={style.actions}>
        <a
          href={`/recipe/${id}`}
          className={`${style.button} ${style.viewButton}`}
        >
          <MdOutlineArrowOutward />
        </a>
        <button className={style.button}>
          <SlTrash />
        </button>
      </div>
    </div>
  );
};

export default RecipePreview;
