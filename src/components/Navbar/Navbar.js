import React, { useState, useEffect } from 'react';
import css from'./Navbar.module.css'; 

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar si la navbar es visible
  const [lastScrollY, setLastScrollY] = useState(0); // Estado para almacenar la última posición de scroll

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Si el usuario se desplaza hacia abajo, oculta la Navbar
      setIsVisible(false);
    } else {
      // Si el usuario se desplaza hacia arriba, muestra la Navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY); // Actualiza la última posición de scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar); // Escucha el evento de desplazamiento

    return () => {
      window.removeEventListener('scroll', controlNavbar); // Limpia el evento cuando se desmonta el componente
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