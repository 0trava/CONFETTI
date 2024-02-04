import React from 'react';
import style from './Reviews.module.css';

// images

// React Responsive Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Reviews = () => {
  return (
    <div className={style.container}  id="Reviews">
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


      {/* Carouse tablet */}
        <div className={`${style.carouselTablet}`}>
      <Carousel
        className={`${style.carouselContainerTablet} ${style.customCarouselTablet}`}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        style={{ overflow: 'visible' }}
        showThumbs={false}
        centerMode={true}  // Центрує активний слайд
        centerSlidePercentage={51}  // Вказує розмір активного слайда відносно інших слайдів
        emulateTouch={true}  
        infiniteLoop={true} 
        selectedItem={0.5} 
      >
          <div className={style.item__desk}>
              <p  className={style.item__review}>Baaardzo super ścianka  , dziękuję za <span>współpracę</span></p>
              <p className={style.item__user}>Anetta Ostalczyk </p>
          </div>

          <div className={style.item__desk}>
              <p  className={style.item__review}>Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa wrażenie!  </p>
              <p className={style.item__user}>Aleksandra Murawska</p>
          </div>

          <div className={style.item__desk}>
              <p  className={style.item__review}>Ścianka  była piękna , bardzo delikatna , Jeszcze raz bardzo dziękuję  ) </p>
              <p className={style.item__user}>Katia Maksymiw </p>
          </div>
      </Carousel>
      </div>




        {/* Carouse mobile */}
        <div className={`${style.carouselCont}`}>
      <Carousel
        className={`${style.carouselContainerMob} ${style.customCarousel}`}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        style={{ overflow: 'visible' }}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const indicatorClass = isSelected ? 'dot selected' : 'dot';
          const dotStyle = {
            margin: '-50px 9px',
            backgroundColor: isSelected ? '#222222' : 'rgba(34, 34, 34, 1)',
          };
  
          return (
            <li
            className={indicatorClass}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
            style={dotStyle}
          />
          );
        }}
      >
          <div className={style.item__desk}>
              <p  className={style.item__review}>Baaardzo super ścianka  , dziękuję za <span>współpracę</span></p>
              <p className={style.item__user}>Anetta Ostalczyk </p>
          </div>

          <div className={style.item__desk}>
              <p  className={style.item__review}>Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa wrażenie!  </p>
              <p className={style.item__user}>Aleksandra Murawska</p>
          </div>

          <div className={style.item__desk}>
              <p  className={style.item__review}>Ścianka  była piękna , bardzo delikatna , Jeszcze raz bardzo dziękuję  ) </p>
              <p className={style.item__user}>Katia Maksymiw </p>
          </div>
      </Carousel>
      </div>

    </div>
  )
}

export default Reviews