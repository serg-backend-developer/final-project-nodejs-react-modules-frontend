import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthBar from './AuthBar/AuthBar';
import Nav from "./Nav/Nav";
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import LogOutModal from '../LogOutModal/LogOutModal';
import styles from './Header.module.css';

const Header = () => {
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
        <Nav />
        {/* AuthBar отримує callback-и для відкриття модалок */}
        <AuthBar
          openSignInModal={() => setSignInOpen(true)}
          openSignUpModal={() => setSignUpOpen(true)}
          openLogOutModal={() => setLogOutOpen(true)}
        />
      </div>

      {/* Рендеринг модальних вікон */}
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
      <LogOutModal
        isOpen={isLogOutOpen}
        onClose={() => setLogOutOpen(false)}
      />
    </header>
  );
};

export default Header;
