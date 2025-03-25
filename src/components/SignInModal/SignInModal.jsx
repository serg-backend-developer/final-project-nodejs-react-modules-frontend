import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignInModal.module.css';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { loginUser } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const SignInModal = ({ isOpen, onClose, onSwitchToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email.").required("Email is required."),
    password: Yup.string().required("Password is required."),
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: yupResolver(SignInSchema)});

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      reset();
      onClose();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <input
          {...register("email")}
          type="email"
          placeholder="Email*"
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        <div className={styles.passwordInputWrapper}>
          <input
            {...register("password")}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className={styles.input}
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