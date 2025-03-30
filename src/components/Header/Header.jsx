import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthBar from "./AuthBar/AuthBar";
import UserBar from "./UserBar/UserBar";
import Nav from "./Nav/Nav";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import LogOutModal from "../LogOutModal/LogOutModal";
import styles from "./Header.module.css";
import style from "../App.module.css";

const Header = () => {
  const location = useLocation();
  // темний стиль для '/' і '/recipes'
  const isDark = location.pathname === "/" || location.pathname === "/recipes";

  const user = useSelector((state) => state.auth.user);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogOutOpen, setLogOutOpen] = useState(false);

  const switchToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  const switchToSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={`${style.container} ${styles.headerContainer}`}>
        <Logo />
        {/* Для десктопної версії відображаємо звичайну навігацію */}
        <Nav />
        {user ? (
          <UserBar openLogOutModal={() => setLogOutOpen(true)} />
        ) : (
          <AuthBar
            openSignInModal={() => setSignInOpen(true)}
            openSignUpModal={() => setSignUpOpen(true)}
          />
        )}
        {/* BurgerMenu відображатиметься лише на мобільних*/}
        <BurgerMenu />
      </div>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setSignInOpen(false)}
        onSwitchToSignUp={switchToSignUp}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSwitchToSignIn={switchToSignIn}
      />
      <LogOutModal isOpen={isLogOutOpen} onClose={() => setLogOutOpen(false)} />
    </header>
  );
};

export default Header;
