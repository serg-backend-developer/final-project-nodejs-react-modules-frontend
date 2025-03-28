import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserBar from "./UserBar/UserBar";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import LogOutModal from "../LogOutModal/LogOutModal";
import styles from "./Header.module.css";

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  // Стан для модальних вікон
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogOutOpen, setLogOutOpen] = useState(false);

  // Функції для перемикання модалок
  const switchToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  const switchToSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link to="/" className={styles.logo} aria-label="Go to homepage">
          foodies
        </Link>
        {/* Відображення UserBar, якщо користувач автентифікований */}
        {user && <UserBar openLogOutModal={() => setLogOutOpen(true)} />}
      </div>

      {/* Модальні вікна */}
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
