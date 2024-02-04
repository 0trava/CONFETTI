import React from 'react';
import style from './Contacts.module.css';
import Forma from './Forma';

const Contacts = () => {
  return (
    <div className={style.container}  id="Contacts">
      <div className={style.contact_box}>
        {/* title */}
        <h2 className={style.title}>Kontakty</h2>

        <p className={style.post_title}>
          Confetti - Studio
          <br />
          Dekoracij Balonami
          <br />
          Warszawa 
        </p>

        {/* Contacts */}
        <ul className={style.contact_list}>
          <li>
            <a href="tel:+48793351407">
              <p className={style.link}>+48 793 351 407</p>
            </a>
          </li>
          <li>
            <a href="mailto:confettibalony@gmail.com">
              <p className={style.link}>confettibalony@gmail.com</p>
            </a>
          </li>
        </ul>
      </div>

      {/* FORM BLOCK */}
      <div className={style.form_block}>
        <div className={style.ballon1}></div>
        <div className={style.ballon2}></div>
        <div className={style.form_block}>
          <Forma />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
