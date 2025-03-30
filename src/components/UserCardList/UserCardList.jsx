import styles from "./UserCardList.module.css";
import UserCard from "../UserCard/UserCard";

const UserCardList = ({ items, reloadDataHandler = () => {} }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          <UserCard user={item} reloadDataHandler={reloadDataHandler} />
        </li>
      ))}
    </ul>
  );
};

export default UserCardList;
