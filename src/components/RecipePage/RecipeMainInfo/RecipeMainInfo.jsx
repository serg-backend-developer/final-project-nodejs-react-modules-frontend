import React from "react";
import styles from './RecipeMainInfo.module.css';

const RecipeMainInfo = ({ title, category, time, description, author }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.tags}>
        <span className={styles.tag}>{category}</span>
        <span className={styles.tag}>{time}</span>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.authorInfo}>
        <button className={styles.authorButton} type="button">
          <img className={styles.avatar} src={author.avatar} alt={author.name}/>
        </button>
        <div>
          <span className={styles.textLabel}>Created by:</span><br/>
          <span className={styles.authorName}>{author.name}</span>
        </div>
      </div>
    </>
  );
};

export default RecipeMainInfo;
