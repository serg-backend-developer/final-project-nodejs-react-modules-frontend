import Hero from "../../components/Hero/Hero";
import styles from "./HomePage.module.css"
import Categories from "../../components/Categories/Categories";

const HomePage = () => {
  return (
    <div className={styles.contentWrapper}>
      <Hero />
      <Categories />
    </div>
  );
};

export default HomePage;
