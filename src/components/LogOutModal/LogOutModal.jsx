import React from 'react';
import Modal from '../Modal/Modal';
import styles from './LogOutModal.module.css';

const LogOutModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.titleMob}>Log out</h2>
      <h2 className={styles.titleDesc}>Are you logging out?</h2>
      <p className={styles.message}>You can always log back in at my time.</p>
      <div className={styles.buttonGroup}>
        <button onClick={onClose} className={styles.confirmButton}>Log out</button>
        <button onClick={onConfirm} className={styles.cancelButton}>Cancel</button>
      </div>
    </Modal>
  );
};

export default LogOutModal;