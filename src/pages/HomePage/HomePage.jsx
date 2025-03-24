import React, { useState } from 'react';
import css from "./HomePage.module.css";
import SignInModal from '../../components/SignInModal/SignInModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import LogOutModal from '../../components/LogOutModal/LogOutModal';

const HomePage = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLogOutOpen, setLogOutOpen] = useState(false);

  const handleLogOutConfirm = () => {
    console.log("User logged out");
    setLogOutOpen(false);
  };

  // This function closes the SignUp modal and opens the SignIn modal.
  const switchToSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  return (
    <div className={css.container}>
      <div className={css.hero}>
        <h1 className={css.title}>Improve Your Culinary Talents</h1>
        <p className={css.text}>
          Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines.
        </p>
        <div className={css.buttons}>
          <button onClick={() => setSignInOpen(true)}>Sign In</button>
          <button onClick={() => setSignUpOpen(true)}>Sign Up</button>
          <button onClick={() => setLogOutOpen(true)}>Log Out</button>
        </div>
      </div>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setSignInOpen(false)}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSwitchToSignIn={switchToSignIn}
      />
      <LogOutModal
        isOpen={isLogOutOpen}
        onClose={() => setLogOutOpen(false)}
        onConfirm={handleLogOutConfirm}
      />
    </div>
  );
};

export default HomePage;