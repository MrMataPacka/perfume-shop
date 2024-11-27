import React, { useState, useEffect } from 'react';
import css from'./Navbar.module.css'; 

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar); 

    return () => {
      window.removeEventListener('scroll', controlNavbar); 
    };
  }, [lastScrollY]);
  
  return (
    <nav className={`${css.navbar} ${isVisible ? css.visible : css.hidden}`}>
    <div className={css.logo}><img src= '/MaGellyLogo.png'/></div>
    <ul className={css.navlinks}>
      <li>Mujeres</li>
      <li>Hombres</li>
      <li>Ofertas</li>
      <li>Marcas</li>
    </ul>
    <ul className={css.special}>
      <li>Login</li>
      <li>Carrito</li>
    </ul>
  </nav>
  );
};

export default Navbar;