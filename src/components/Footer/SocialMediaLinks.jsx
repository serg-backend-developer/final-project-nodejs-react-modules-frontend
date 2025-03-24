import React from "react";
import styles from "./Footer.module.css";

const SocialMediaLinks = () => {
  return (
    <nav className={styles.socialLinks}>
      <a
        href="https://www.facebook.com/goITclub/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialButton}
        aria-label="Facebook"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="/sprite.svg#facebook" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/goitclub/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialButton}
        aria-label="Instagram"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="/sprite.svg#instagram" />
        </svg>
      </a>
      <a
        href="https://www.youtube.com/c/GoIT"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialButton}
        aria-label="YouTube"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="/sprite.svg#youtube" />
        </svg>
      </a>
    </nav>
  );
};

export default SocialMediaLinks;