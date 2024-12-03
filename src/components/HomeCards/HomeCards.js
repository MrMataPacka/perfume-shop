import React, { useState } from 'react'; 
import css from './HomeCards.module.css';

const HomeCards = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Lista de imágenes para el carousel
  const images = [
    "https://blog.perfumeriasunidas.com/hubfs/PORTADA%20FRAGANCIAS.png",
    "https://hips.hearstapps.com/hmg-prod/images/los-mejores-perfumes-de-oton-o-para-hombre-esquire-1604414321.jpg",
    "https://www.lodoro.cl/cdn/shop/collections/PERFUME.jpg?v=1721421162"
  ];

  const images2 = [
    "https://img77.uenicdn.com/image/upload/v1548677428/category/shutterstock_1038821137.jpg",
    "https://irfe.com/wp-content/uploads/2024/04/A-collection-of-the-expensive-perfumes-for-women-displayed-on-a-luxurious-vanity-1300x743.jpg",
    "https://hueleamillonario.com/wp-content/uploads/2023/07/cropped-Botes-perfumes-2-scaled-1-1024x683.jpg"
  ];

  // Función para cambiar a la siguiente imagen
  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className={css.homeCards}>
      <div className={css.imageSection}>
        <img 
          src={images2[currentImage]} 
          alt="Imagen Carousel" 
          className={css.mainImg} 
        />
        <div className={css.textVertical}>
          DESCUBRE LAS NUEVAS FRAGANCIAS
          {/* Botón de flecha */}
          <button className={css.nextButton} onClick={handleNextImage}>➡</button>
        </div>
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
        {/* Imagen del carousel */}
        <img 
          src={images[currentImage]} 
          alt="Imagen Carousel" 
          className={css.smallImg} 
        />
        <div className={css.textBox}>Los aromas más exclusivos de México en un solo lugar...</div>
      </div>
    </div>
  );
};

export default HomeCards;
