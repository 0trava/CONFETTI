import React from 'react';
import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ toggleBurgerMenu }) => {
  return (
    <div className={styles['burger-menu']}>
      <button className={styles['close-button']} onClick={toggleBurgerMenu}>
        &times;
      </button>
      {/* Ваш вміст меню */}
    </div>
  );
};

export default BurgerMenu