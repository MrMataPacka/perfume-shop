import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.leftSection}>
        <img src={'/MaGellyLogoBlanco2.png'} alt="Logo" className={css.logo} />
        <p className={css.tagline}>Aromas que se quedan contigo</p>
        {/* Enlace a la sección "Sobre Nosotros" */}
        <p className={css.aboutLink}>
          <a href="about">Sobre Nosotros</a>
        </p>
      </div>
      <div className={css.rightSection}>
        <h3 className={css.socialTitle}>REDES SOCIALES</h3>
        <div className={css.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

