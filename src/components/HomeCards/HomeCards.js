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
        <div className={css.orangeBox}>Cuadro Naranja</div>
        <img src="https://blog.perfumeriasunidas.com/hubfs/PORTADA%20FRAGANCIAS.png" alt="Imagen Stock" className={css.smallImg} />
        <div className={css.textBox}>Texto con fondo blanco</div>
      </div>
    </div>
  );
};

export default HomeCards;
