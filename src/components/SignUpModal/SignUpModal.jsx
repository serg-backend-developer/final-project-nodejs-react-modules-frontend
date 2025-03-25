import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignUpModal.module.css';

const SignUpModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up:', { name, email, password });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.signUpModal}>
      <h2 className={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name*"
          className={styles.input}
          required
        />
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
        <button type="submit" className={styles.submitButton}>Create</button>
      </form>
      <p className={styles.footerText}>
        I already have an account?{' '}
        <button
          type="button"
          className={styles.switchLink}
          onClick={onSwitchToSignIn}
        >
          Sign In
        </button>
      </p>
    </Modal>
  );
};

export default SignUpModal;