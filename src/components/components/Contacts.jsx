import React from 'react';
import style from './Contacts.module.css';
import Forma from './Forma';

const Contacts = () => {
  return (
    <div className={style.container}>
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
            <p>+48 793 351 407</p>
          </li>
          <li>
            <p>confettibalony@gmail.com</p>
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
