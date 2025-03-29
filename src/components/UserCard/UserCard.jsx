import styles from "./UserCard.module.css";
import defaultAvatar from "../../img/default-avatar.png";
import icons from "../../img/icons2.svg";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, name, avatar, recipesCount, recipes } = user;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <img
          src={avatar || defaultAvatar}
          alt={`${name}'s avatar`}
          className={styles.avatar}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.userName}>{name}</div>
        <div className={styles.recipesCount}>Own recipes: {recipesCount}</div>
        <button className={styles.button} type="button">
          Follow
        </button>
      </div>
      <div className={styles.recipesWrapper}>
        {recipes.map(({ id, title, thumb }, index) => (
          <div className={styles.recipe} key={index}>
            <img src={thumb} alt={title} className={styles.recipeThumb} />
          </div>
        ))}
      </div>
      <button className={styles.iconWrapper} onClick={handleClick}>
        <svg>
          <use href={`${icons}#icon-arrow-up-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default UserCard;
