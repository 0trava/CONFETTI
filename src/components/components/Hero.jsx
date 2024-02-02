import React from 'react';
import style from './Hero.module.css';
import Img_Bullon_1 from '../../assets/images/hero_ballons1_desk.png';
import Img_Bullon_2 from '../../assets/images/hero_ballons2_desk.png';
import Background from '../../assets/images/hero_background_dsk.png';

const Hero = () => {
  return (
    <div className={style.container}>
        <img className={style.bullon_1} src={Img_Bullon_1} alt="bullon1" />
        <img className={style.bullon_2} src={Img_Bullon_2} alt="bullon1" />
        <img className={style.background} src={Background} alt="bullon1" />

      <div className={style.title_box}>
      <h1 className={style.title}> Tworzymy unikalne i niepowtarzalne dekoracje balonowe na imprezy</h1>
      </div>



    </div>
  )
}

export default Hero