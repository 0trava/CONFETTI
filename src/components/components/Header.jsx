import React from 'react';
import style from './Header.module.css';

// Images
import Logo from '../../assets/images/logo.png';
import MenuFull from '../../assets/images/menu.png';
import MenuFull_hover from '../../assets/images/menu_hover.png';
// import MenuIcon from '../../assets/images/menu_icon.png';

const Header = () => {
  return (
    <div className={style.header}>
            {/* Logo */}
            <a href="/" className={style.logo_link}>
              <img className={style.logo} src={Logo} alt="logo" />
            </a>


            {/* Menu */}
            <div className={style.menu__full_box}>
               <img className={style.menu} src={MenuFull} alt="MenuFull icon" />
               <img className={style.menu_hover} src={MenuFull_hover} alt="MenuFull icon hover" />
            </div>


    </div>
  )
}

export default Header