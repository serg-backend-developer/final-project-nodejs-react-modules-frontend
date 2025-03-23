import css from "./Subtitle.module.css";

const Subtitle = ({ children }) => {
  return <p className={css.subtitle}>{children}</p>;
};

export default Subtitle;
