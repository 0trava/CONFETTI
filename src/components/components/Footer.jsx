import React from 'react';
import style from './Footer.module.css';

// Images
import Logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className={style.container}>

            <div className={style.line}></div>

            <div className={style.box}>
                {/* Logo */}
                <a href="/" className={style.logo_link}>
                  <img className={style.logo} src={Logo} alt="logo" />
                </a>

                <p className={style.copyright}>confetti © 2023</p>
            </div>    

    </div>
  )
}

export default Footer;