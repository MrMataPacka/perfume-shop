import React from 'react';
import logo from '../../logo.svg'; 
import css from './App.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ProductCard } from "../../components";
import { HomeCards } from "../../components";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { FeaturedProducts } from "../../components";
import { products } from "../../utils/products";

function App() {
  return (
    <div>
      <Navbar />
      
      <HomeCards />

      <FeaturedProducts />
      
      <div className={css.ProductList}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} className={css.ProductList_card} />
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;