import React from 'react';
import Modal from '../Modal/Modal';
import styles from './LogOutModal.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/operations';

const LogOutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    onClose();
    navigate('/');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.titleMob}>Log out</h2>
      <h2 className={styles.titleDesc}>Are you logging out?</h2>
      <p className={styles.message}>You can always log back in at my time.</p>
      <div className={styles.buttonGroup}>
        <button onClick={handleLogout} className={styles.confirmButton}>Log out</button>
        <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
      </div>
    </Modal>
  );
};

export default LogOutModal;