import React from 'react';
import styles from './AboutUs.module.css'; // Importar el archivo de estilos como objeto

const AboutUs = () => {
  return (
    <div className={styles.AboutUsContainer}>
      <h2 className={styles.AboutUsTitle}>Sobre Nosotros</h2>
      <p className={styles.AboutUsText}>
        En nuestra tienda de perfumes, nos especializamos en ofrecer una selección única de fragancias de lujo. 
        Nuestro compromiso es brindar experiencias sensoriales excepcionales, proporcionando productos de alta calidad 
        y marcas reconocidas mundialmente. Ya sea que busques una fragancia sofisticada para una ocasión especial o 
        un perfume que te acompañe todos los días, en nuestra tienda encontrarás lo mejor de la perfumería.
      </p>
      <p className={styles.AboutUsText}>
        Contamos con una amplia variedad de opciones, desde perfumes clásicos hasta las últimas novedades en el mundo de la fragancia. 
        Nuestro equipo está siempre dispuesto a ayudarte a encontrar la fragancia perfecta que se ajuste a tu estilo y personalidad.
      </p>
      <p className={styles.AboutUsText}>
        ¡Te invitamos a descubrir el fascinante mundo de las fragancias con nosotros y a encontrar el perfume ideal para ti!
      </p>
    </div>
  );
};

export default AboutUs;