import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignInModal.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignInModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика входа
    console.log('Sign In:', { email, password });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.signInModal}>
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.input}
            required
          />
        </label>
        <label className={styles.label}>
          Password
          <div className={styles.passwordInputWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={styles.input}
              required
            />
            <button
              type="button"
              className={styles.togglePassword}
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>
        <button type="submit" className={styles.submitButton}>Log In</button>
      </form>
      <p className={styles.footerText}>
        Don't have an account? <a href="#signup">Sign Up</a>
      </p>
    </Modal>
  );
};

export default SignInModal;