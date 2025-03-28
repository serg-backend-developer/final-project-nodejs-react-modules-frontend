import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="headerLogo" aria-label="Go to homepage">
          foodies
        </Link>
        {/* 
          Тут будуть компоненти:
          1) Nav (для авторизованого користувача)
          2) AuthBar (для неавторизованого користувача) або UserBar (для авторизованого користувача)
        */}
      </div>
    </header>
  );
};

export default Header;
