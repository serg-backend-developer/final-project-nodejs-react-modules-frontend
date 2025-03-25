import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignUpModal.module.css';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const SignUpModalTest = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().min(2, "Name must contain at least 2 characters.").required("Name is required."),
    email: Yup.string().email("Must be a valid email.").required("Email is required."),
    password: Yup.string().min(6, "Password must contain at least 6 characters.").required("Password is required."),
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({resolver: yupResolver(SignUpSchema)});

  const onSubmit = (data) => {
    console.log(data);
    reset();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.signUpModal}>
      <h2 className={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} id="SignUp">
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        <input
          {...register("name")}
          type="text"
          placeholder="Name*"
          className={styles.input}
        />
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

export default SignUpModalTest;