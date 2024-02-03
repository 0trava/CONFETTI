import React from 'react';
import style from './BurgerMenu.module.css';

// Images
import Logo from '../../assets/images/logo_menu.png';
import BtnClose from '../../assets/images/menu_btn_close.png';

const BurgerMenu = ({ toggleBurgerMenu }) => {
  return (
    <div className={style.burger_menu}>

      <div className={style.header} >
          {/* logo */}
            <a href="/" className={style.logo_link}>
              <img className={style.logo} src={Logo} alt="logo" />
            </a>
        

          {/* Btn close */}
          <button className={style.close_button} onClick={toggleBurgerMenu}>
              <img src={BtnClose} alt="BtnClose" />
          </button>

      </div>

      <ul className={style.list}>
            <li>główna</li>
            <li>O nas</li>
            <li>Recenzje</li>
            <li>Kontakty</li>
      </ul>


      {/* Ваш вміст меню */}
    </div>
  );
};

export default BurgerMenu