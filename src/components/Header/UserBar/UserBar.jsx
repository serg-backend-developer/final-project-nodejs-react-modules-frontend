// src/components/Header/UserBar/UserBar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./UserBar.module.css";

// Заглушка поки не розберусь
const defaultAvatar = "public/img/...";

const UserBar = ({ openLogOutModal }) => {
  const user = useSelector((state) => state.auth.user);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Закриваємо випадаючий список, якщо клік було поза його межами
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Якщо користувача немає, нічого не рендеримо
  if (!user) {
    return null;
  }

  return (
    <div className={styles.userBar} ref={dropdownRef}>
      <div
        className={styles.userInfo}
        onClick={() => setDropdownOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <img
          src={user.avatar || defaultAvatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <span className={styles.userName}>{user.name}</span>
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <Link
            to="/user"
            className={styles.dropdownItem}
            onClick={() => setDropdownOpen(false)}
          >
            Profile
          </Link>
          <button
            type="button"
            className={styles.dropdownItem}
            onClick={() => {
              setDropdownOpen(false);
              openLogOutModal();
            }}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserBar;
