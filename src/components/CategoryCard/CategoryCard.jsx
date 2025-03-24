import clsx from "clsx";
import css from "./CategoryCard.module.css";
import ArrowUpRightIcon from "../../icons/ArrowUpRightIcon";

const CategoryCard = ({ title }) => {
  const className = clsx(css.categoryCard, css[title.toLowerCase()]);

  return (
    <div className={className}>
      <div className={css.cardContent}>
        <h3 className={css.cardTitle}>{title}</h3>
        <div className={css.iconWrapper}>
          <ArrowUpRightIcon />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
