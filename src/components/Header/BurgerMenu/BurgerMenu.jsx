import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../Logo/Logo";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const isDark = location.pathname === "/" || location.pathname === "/recipes";
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
        <svg
          className={`${styles.burgerIcon} ${
            isDark ? styles.darkIcon : styles.lightIcon
          }`}
          width="28"
          height="28"
        >
          <use href="/img/icons.svg#burger-menu"></use>
        </svg>
      </button>
      <div className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.menuHeader}>
          <Logo onClick={toggleMenu} />
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Close menu"
            className={styles.closeBtn}
          >
            <svg className={styles.closeIcon} width="24" height="24">
              <use href="/img/icons.svg#icon-x"></use>
            </svg>
          </button>
        </div>
        <nav className={styles.mobileNav}>
          <NavLink to="/" className={styles.mobileNavItem} onClick={toggleMenu}>
            HOME
          </NavLink>
          <NavLink
            to="/recipe/add"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            ADD RECIPE
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
