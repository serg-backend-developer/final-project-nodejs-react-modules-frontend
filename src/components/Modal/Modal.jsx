import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children, className = '' }) => {
  if (!isOpen) return null;
  document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    onClose();
  }
});
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} ${className}`} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="24px" height="24px"><use href='/img/icons.svg#icon-x'></use></svg>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;