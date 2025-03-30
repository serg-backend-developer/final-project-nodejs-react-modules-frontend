import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const [isMenuOpen, setMenuOpen] = useState(false);

  if (!user) return null;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        className={styles.burgerButton}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <div className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ""}`}>
        <button type="button" className={styles.closeBtn} onClick={toggleMenu}>
          Закрити
        </button>
        <nav className={styles.mobileNav}>
          <NavLink to="/" className={styles.mobileNavItem} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/add" className={styles.mobileNavItem} onClick={toggleMenu}>
            Add Recipe
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
