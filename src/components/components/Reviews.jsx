import React from 'react';
import style from './Reviews.module.css';

// images

// import Emojie from '../../assets/images/emojie.png'

const Reviews = () => {
  return (
    <div className={style.container}>
        <h2 className={style.title}>
        Recenzje
        </h2>

        {/*Reviews Desktop*/}
        <ul className={style.list__desk}>
          <li className={style.item__desk}>
              <p  className={style.item__review}>Baaardzo super ścianka  , dziękuję za <span>współpracę</span></p>
              <p className={style.item__user}>Anetta Ostalczyk </p>
          </li>

          <li className={style.item__desk}>
              <p  className={style.item__review}>Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa wrażenie!  </p>
              <p className={style.item__user}>Aleksandra Murawska</p>
          </li>

          <li className={style.item__desk}>
              <p  className={style.item__review}>Ścianka  była piękna , bardzo delikatna , Jeszcze raz bardzo dziękuję  ) </p>
              <p className={style.item__user}>Katia Maksymiw </p>
          </li>
        </ul>

    </div>
  )
}

export default Reviews