import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainTitle from "../MainTitle/MainTitle.jsx";
import Subtitle from "../Subtitle/Subtitle.jsx";
import CategoryList from "../CategoryList/CategoryList";
import { loadCategories } from "../../redux/categories/operations";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <section>
      <MainTitle>Categories</MainTitle>
      <Subtitle>
        Discover a limitless world of culinary possibilities and enjoy exquisite
        recipes that combine taste, style and the warm atmosphere of the
        kitchen.
      </Subtitle>
      <CategoryList />
    </section>
  );
};

export default Categories;
