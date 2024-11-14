import React from 'react';
import logo from '../../logo.svg'; // Este logo puede ser usado en el navbar si lo necesitas
import css from './App.module.css';
import { ProductCard } from "../../components";
import { HomeCards } from "../../components";
import { Navbar } from "../../components";
import { products } from "../../utils/products";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* HomeCards */}
      <HomeCards />

      {/* Título principal */}
      <h1 className={css.AppTitle}>TITULO??</h1>
      <p>Tienda PERFUMES.</p>
      
      {/* Lista de productos */}
      <div className={css.ProductList}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} className={css.ProductList_card} />
        })}
      </div>
    </div>
  );
}

export default App;