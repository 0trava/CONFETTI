import React, { useState, useEffect } from 'react';
import style from './Header.module.css';

// Images
import Logo from '../../assets/images/logo.png';
import MenuFull from '../../assets/images/menu.png';
import MenuFull_hover from '../../assets/images/menu_hover.png';
import MenuIcon from '../../assets/images/menu_icon.png';
import MenuIcon_hover from '../../assets/images/menu_icon_hover.png';

import { Link as ScrollLink } from 'react-scroll';

const Header = ({ toggleBurgerMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${style.container} ${isScrolled ? style.scrolled : ''}`}>
      {/* Logo */}
      {!isScrolled ? 
      (<ScrollLink to="Hero" smooth={true} duration={500} className={style.logo_link}>
        <img className={style.logo} src={Logo} alt="logo" />
      </ScrollLink>
  ) : (<div/>)}

      {/* Menu */}
      <div onClick={toggleBurgerMenu} className={style.menu__full_box}>
        {isScrolled ? (
          <>
            {/* Menu scroll*/}
            <img className={style.menu} src={MenuIcon} alt="MenuFull icon" />
            <img className={style.menu_hover} src={MenuIcon_hover} alt="MenuFull icon hover" />
          </>
        ) : (
          <>
            {/* Menu */}
            <img className={style.menu} src={MenuFull} alt="MenuFull icon" />
            <img className={style.menu_hover} src={MenuFull_hover} alt="MenuFull icon hover" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
