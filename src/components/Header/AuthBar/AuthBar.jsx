// src/components/Header/AuthBar/AuthBar.jsx
import React from "react";
import { useSelector } from "react-redux";
import styles from "./AuthBar.module.css";

const AuthBar = ({ openSignInModal, openSignUpModal, openLogOutModal }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.authBar}>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          {/* Замінюємо прямий виклик logout на відкриття модального вікна */}
          <button type="button" onClick={openLogOutModal}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={openSignInModal}>
            Sign in
          </button>
          <button type="button" onClick={openSignUpModal}>
            Sign up
          </button>
        </>
      )}
    </div>
  );
};

export default AuthBar;
