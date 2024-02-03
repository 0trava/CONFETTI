import React from 'react';
import style from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={style.container}>

      <div className={style.title_box}>
         <h2 className={style.title}>kreatywny zespół <br/> dekoratorów</h2>
         <p>Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy i wydarzenia</p>
      </div>


      <div className={style.list}>
        {/* 1 */}
        <div class={style.item}>
          <h2 class={style.item__title}>Kreatywne podejście i<br/>
              dbałość o szczegóły</h2>
          <p class={style.item__text}>
              Specjaliści zapewniają doradztwo i<br/>
              kreatywność przy wyborze dekoracji<br/>
              balonowych, z dbałością o szczegóły<br/>
            </p>
        </div>

        {/* 2 */}
        <div class={style.item}>
          <h2 class={style.item__title}>Materiały przyjazne<br/>
          dla środowiska</h2>
          <p class={style.item__text}>
              Wykorzystywane są materiały najwyższej jakości,
              w tym biodegradowalne materiały balonowe,
              aby pozostawić jak najmniejszy ślad na środowisku.
            </p>
        </div>

        {/* 3 */}
        <div class={style.item}>
          <h2 class={style.item__title}>Szeroka gama kolorów<br/>
          do personalizacji</h2>
          <p class={style.item__text}>
          Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować wystrój na każdą okazję.
            </p>
        </div>

        {/* 4 */}
        <div class={style.item}>
          <h2 class={style.item__title}>Gwarancja dostawy<br/>
            i montażu</h2>
          <p class={style.item__text}>
          Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż, zapewniając klientom kompleksową obsługę.
            </p>
        </div>




      </div>






    {/* carousel -------------------------------------- */}
    {/* <div className={style.slider_section}>
      <div className={style.slider_container}>
        <div className={style.slider_item}>1</div>
        <div className={style.slider_item}>2</div>
        <div className={style.slider_item}>3</div>
      </div>
    </div> */}




    </div>
  )
}

export default AboutUs