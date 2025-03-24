import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignUpModal.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
        <label className={styles.label}>
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            className={styles.input}
            required
          />
        </label>
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
              placeholder="Create a password"
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
        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
      <p className={styles.footerText}>
        Already have an account?{' '}
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