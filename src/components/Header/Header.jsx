import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthBar from './AuthBar/AuthBar';
import UserBar from './UserBar/UserBar';
import Nav from './Nav/Nav';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import LogOutModal from '../LogOutModal/LogOutModal';
import styles from './Header.module.css';

const Header = () => {
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
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="Go to homepage">
          foodies
        </Link>
        <Nav />
        {user ? (
          <UserBar openLogOutModal={() => setLogOutOpen(true)} />
        ) : (
          <AuthBar
            openSignInModal={() => setSignInOpen(true)}
            openSignUpModal={() => setSignUpOpen(true)}
          />
        )}
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
      <LogOutModal
        isOpen={isLogOutOpen}
        onClose={() => setLogOutOpen(false)}
      />
    </header>
  );
};

export default Header;