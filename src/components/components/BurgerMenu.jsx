import React from 'react';
import style from './BurgerMenu.module.css';
import { Link as ScrollLink } from 'react-scroll';

// Images
import Logo from '../../assets/images/logo_menu.png';
import BtnClose from '../../assets/images/menu_btn_close.png';

const BurgerMenu = ({ toggleBurgerMenu }) => {
  const handleLinkClick = () => {
    // Закриваємо меню при кліці на пункт
    toggleBurgerMenu();
  };

  return (
    <div className={style.burger_menu}>
      <div className={style.header}>
        {/* logo */}
        <ScrollLink to="Hero" smooth={true} duration={500} className={style.logo_link} onClick={handleLinkClick}>
          <img className={style.logo} src={Logo} alt="logo" />
        </ScrollLink>
        

        {/* Btn close */}
        <button className={style.close_button} onClick={toggleBurgerMenu}>
          <img src={BtnClose} alt="BtnClose" />
        </button>
      </div>

      <ul className={style.list}>
        <ScrollLink to="Hero" smooth={true} duration={500} onClick={handleLinkClick}>
          <li>główna</li>
        </ScrollLink>
        <ScrollLink to="AboutUs" smooth={true} duration={500} onClick={handleLinkClick}>
          <li>O nas</li>
        </ScrollLink>
        <ScrollLink to="Reviews" smooth={true} duration={500} onClick={handleLinkClick}>
          <li>Recenzje</li>
        </ScrollLink>
        <ScrollLink to="Contacts" smooth={true} duration={500} onClick={handleLinkClick}>
          <li>Kontakty</li>
        </ScrollLink>
      </ul>
    </div>
  );
};

export default BurgerMenu;