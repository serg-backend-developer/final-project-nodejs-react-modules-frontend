import clsx from "clsx";
import CategoryCard from "../CategoryCard/CategoryCard";
import css from "./CategoryList.module.css";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const categories = useSelector((state) => state.categories.list);
  const provideTabletClass = (index) => {
    return index % 5 === 2 ? "tw2" : "tw1";
  };

  const provideDesktopClass = (index) => {
    return [2, 3].includes(index % 6) ? "dw2" : "dw1";
  };

  const createItemClass = (index) => {
    return clsx(
      css.categoriesListItem,
      css[provideTabletClass(index)],
      css[provideDesktopClass(index)],
    );
  };

  return (
    <ul className={css.categoriesList}>
      {categories.map((category, index) => (
        <li className={createItemClass(index)} key={index}>
          <CategoryCard title={category.name} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
