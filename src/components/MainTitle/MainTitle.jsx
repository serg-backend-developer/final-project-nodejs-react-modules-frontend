import css from "./MainTitle.module.css";

const MainTitle = ({ children }) => {
  return <h2 className={css.mainTitle}>{children}</h2>;
};

export default MainTitle;
