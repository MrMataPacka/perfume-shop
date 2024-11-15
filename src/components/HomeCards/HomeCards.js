import React from 'react';
import css from './HomeCards.module.css';

const HomeCards = () => {
  return (
    <div className={css.homeCards}>
      <div className={css.imageSection}>
        <img src="https://blog.perfumeriasunidas.com/hubfs/PORTADA%20FRAGANCIAS.png" alt="Imagen de Stock" className={css.mainImg} />
        <div className={css.textVertical}>DESCUBRE LAS NUEVAS FRAGANCIAS</div>
      </div>
      <div className={css.rightSection}>
        <div className={css.orangeBox}>
          <h1 className={css.orangeBoxH1}>OFERTAS OFERTAS OFERTAS OFERTAS</h1>
          <h1 className={css.orangeBoxH1}>LOS MEJORES PRECIOS</h1>
          <ul className={css.special}>
            <li>Perfumes</li>
            <li>Body Creams</li>
            <li>Regalos</li>
          </ul>
        </div>
        <img src="https://blog.perfumeriasunidas.com/hubfs/PORTADA%20FRAGANCIAS.png" alt="Imagen Stock" className={css.smallImg} />
        <div className={css.textBox}>Texto con fondo blanco</div>
      </div>
    </div>
  );
};

export default HomeCards;
