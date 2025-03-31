import React from 'react';
import styles from './TitleInput.module.css';

const TitleInput = ({ register, errors, watch }) => {
    const titleValue = watch("title");
    
    return (
        <div className={styles['form-group']}>
            <input
                type="text"
                className={`${styles['text-input']} ${styles['text-input--title']} ${
                    errors.title ? styles['has-error'] : ''
                }`}
                {...register("title")}
                placeholder="THE NAME OF THE RECIPE"
            />
            {errors.title && !titleValue && <p className={styles['error-message']}>{errors.title.message}</p>}
        </div>
    );
};

export default TitleInput;