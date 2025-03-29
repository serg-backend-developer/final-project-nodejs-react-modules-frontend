import styles from "./UserCard.module.css";
import defaultAvatar from "../../img/default-avatar.png";
import icons from "../../img/icons2.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { follow, unfollow } from "../../api/foodies";
import { useSelector } from "react-redux";
import { isCurrentAuthUser } from "../../redux/auth/authSlice";

const UserCard = ({ user, reloadDataHandler = () => {} }) => {
  const { id, name, avatar, recipesCount, recipes, isFollowedByAuthUser } =
    user;
  const navigate = useNavigate();
  const hideButton = useSelector(isCurrentAuthUser(id));

  const handleIconClick = () => {
    navigate(`/user/${id}`);
  };

  const handleButtonClick = async () => {
    try {
      if (isFollowedByAuthUser) {
        await unfollow(id);
      } else {
        await follow(id);
      }
    } catch (error) {
      const operation = isFollowedByAuthUser ? "unfollow" : "follow";
      toast.error(`Failed to ${operation}!`);
    } finally {
      reloadDataHandler();
    }
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
        {!hideButton && (
          <button
            className={styles.button}
            type="button"
            onClick={handleButtonClick}
          >
            {isFollowedByAuthUser ? "Following" : "Follow"}
          </button>
        )}
      </div>
      <div className={styles.recipesWrapper}>
        {recipes.map(({ id, title, thumb }, index) => (
          <div className={styles.recipe} key={index}>
            <img src={thumb} alt={title} className={styles.recipeThumb} />
          </div>
        ))}
      </div>
      <button className={styles.iconWrapper} onClick={handleIconClick}>
        <svg>
          <use href={`${icons}#icon-arrow-up-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default UserCard;
