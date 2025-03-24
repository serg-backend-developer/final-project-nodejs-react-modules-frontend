import Hero from "../../components/Hero/Hero";
import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={styles.contentWrapper}>
      <Hero />
    </div>
  );
};

export default HomePage;
