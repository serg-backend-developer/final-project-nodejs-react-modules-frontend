import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav>
      <button 
        type="button" 
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
        className="burgerButton"
      >
        &#9776;
      </button>

      <ul className={`navList ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/add" onClick={() => setIsMenuOpen(false)}>Add Recipe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
