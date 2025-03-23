import css from "./HomePage.module.css";
import Categories from "../../components/Categories/Categories";

const HomePage = () => {

    return (
        <div className={css["container"]}>
            <div className={css["hero"]}>
                <h1 className={css.title}>Improve Your Culinary Talents</h1>
                <p className={css.text}>Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines.</p>
            </div>
            <Categories />
        </div>
    )
};

export default HomePage;