import React from 'react';
import css from'./Navbar.module.css'; // Recuerda incluir estilos personalizados

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.logo}>Logo</div>
      <ul className={css.navlinks}>
        <li>Mujeres</li>
        <li>Hombres</li>
        <li>Ofertas</li>
        <li>Marcas</li>
        <li className={css.special}>Login</li>
        <li className={css.special}>Carrito</li>
      </ul>
    </nav>
  );
};

export default Navbar;