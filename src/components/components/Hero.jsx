// Hero.jsx

import React, { useEffect } from 'react';
import style from './Hero.module.css';
import Img_Bullon_1 from '../../assets/images/hero_ballons1_desk.png';
import Img_Bullon_2 from '../../assets/images/hero_ballons2_desk.png';
import Background from '../../assets/images/hero_background_dsk.png';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
        const translateY = scrollValue * speed;
        element.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style.container} id="Hero">
      <img className={`${style.bullon_1} parallax`} data-speed="0.2" src={Img_Bullon_1} alt="bullon1" />
      <img className={`${style.bullon_2} parallax`} data-speed="0.3" src={Img_Bullon_2} alt="bullon2" />
      <img className={`${style.background} parallax`} data-speed="0.1" src={Background} alt="background" />

      <div className={style.title_box}>
        <h1 className={style.title}>
          Tworzymy unikalne <br />
          i niepowtarzalne <br />
          <span> dekoracje balonowe</span> <br />na imprezy
        </h1>
      </div>
    </div>
  );
};

export default Hero;
