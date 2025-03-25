import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignInModal.module.css';

const SignInModal = ({ isOpen, onClose, onSwitchToSignUp }) => {
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email*"
          className={styles.input}
          required
        />
        <div className={styles.passwordInputWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className={styles.input}
            required
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <svg width="18px" height="18px"><use href='/img/icons.svg#icon-eye'></use></svg> : <svg width="18px" height="18px"><use href='/img/icons.svg#icon-eye-off'></use></svg>}
          </button>
        </div>
        <button type="submit" className={styles.submitButton}>Sign in</button>
      </form>
      <p className={styles.footerText}>
        Don't have an account?{' '}
        <button
          type="button"
          className={styles.switchLink}
          onClick={onSwitchToSignUp}
        >
          Create an account
        </button>
      </p>
    </Modal>
  );
};

export default SignInModal;