import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  const location = useLocation();
  const isDark = location.pathname === "/" || location.pathname === "/recipes";

  return (
    <Link
      to="/"
      className={`${styles.logo} ${isDark ? styles.dark : styles.light}`}
      aria-label="Go to homepage"
    >
      foodies
    </Link>
  );
};

export default Logo;
