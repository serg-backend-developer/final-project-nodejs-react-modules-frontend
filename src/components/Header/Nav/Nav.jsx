// src/components/Header/Nav/Nav.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  const user = useSelector((state) => state.auth.user);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Якщо користувач не залогінений, не відображаємо навігацію
  if (!user) return null;

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className={styles.nav}>
      {/* Кнопка-бургер для мобільної версії */}
      <button 
        type="button" 
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
        className={styles.burgerButton}
      >
        &#9776;
      </button>
      
      <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/add" onClick={() => setMenuOpen(false)}>Add Recipe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
