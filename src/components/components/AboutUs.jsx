import React from 'react';
import style from './AboutUs.module.css';

// React Responsive Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const AboutUs = () => {
  return (
    <div className={style.container}>
      <div className={style.title_box}>
        <h2 className={style.title}>
          kreatywny zespół <br /> dekoratorów
        </h2>
        <p>
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
          dekoracji na imprezy i wydarzenia
        </p>
      </div>



      {/* List */}
      <div className={style.list}>
        {/* 1 */}
        <div className={style.item}>
          <h2 className={style.item__title}>
            Kreatywne podejście i<br />
            dbałość o szczegóły
          </h2>
          <p className={style.item__text}>
            Specjaliści zapewniają doradztwo i<br />
            kreatywność przy wyborze dekoracji
            <br />
            balonowych, z dbałością o szczegóły
            <br />
          </p>
        </div>

        {/* 2 */}
        <div className={style.item}>
          <h2 className={style.item__title}>
            Materiały przyjazne
            <br />
            dla środowiska
          </h2>
          <p className={style.item__text}>
            Wykorzystywane są materiały najwyższej jakości, w tym
            biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy
            ślad na środowisku.
          </p>
        </div>

        {/* 3 */}
        <div className={style.item}>
          <h2 className={style.item__title}>
            Szeroka gama kolorów
            <br />
            do personalizacji
          </h2>
          <p className={style.item__text}>
            Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala
            spersonalizować wystrój na każdą okazję.
          </p>
        </div>

        {/* 4 */}
        <div className={style.item}>
          <h2 className={style.item__title}>
            Gwarancja dostawy
            <br />i montażu
          </h2>
          <p className={style.item__text}>
            Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
            także ich montaż, zapewniając klientom kompleksową obsługę.
          </p>
        </div>
      </div>

      {/* carousel -------------------------------------- */}
      <div className={`${style.carouselCont}`}>
      <Carousel
        className={`${style.carouselContainer} ${style.customCarousel}`}
        showArrows={false}
        showStatus={false}
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
        {/* 1 */}
        <div className={style.item}>
          <h2 className={style.item__title}>
            Kreatywne podejście i<br />
            dbałość o szczegóły
          </h2>
          <p className={style.item__text}>
            Specjaliści zapewniają doradztwo i<br />
            kreatywność przy wyborze dekoracji
            <br />
            balonowych, z dbałością o szczegóły
            <br />
          </p>
        </div>

        {/* 2 */}
        <div className={`${style.item} ${style.item_2}`}>
          <h2 className={style.item__title}>
            Materiały przyjazne
            <br />
            dla środowiska
          </h2>
          <p className={style.item__text}>
            Wykorzystywane są materiały najwyższej jakości, w tym
            biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy
            ślad na środowisku.
          </p>
        </div>

        {/* 3 */}
        <div className={`${style.item} ${style.item_3}`}>
          <h2 className={style.item__title}>
            Szeroka gama kolorów
            <br />
            do personalizacji
          </h2>
          <p className={style.item__text}>
            Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala
            spersonalizować wystrój na każdą okazję.
          </p>
        </div>

        {/* 4 */}
        <div className={`${style.item} ${style.item_4}`}>
          <h2 className={style.item__title}>
            Gwarancja dostawy
            <br />i montażu
          </h2>
          <p className={style.item__text}>
            Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
            także ich montaż, zapewniając klientom kompleksową obsługę.
          </p>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
