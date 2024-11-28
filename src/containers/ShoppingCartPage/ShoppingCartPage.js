import React from 'react';
import logo from '../../logo.svg'; 
import css from './ShoppingCartPage.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { CartPage } from "../../components";
import { products } from "../../utils/products";

function ShoppingCartPage() {
  return (
    <div>
      <Navbar />
      <CartPage />
      <Footer />
    </div>
  );
}

export default ShoppingCartPage;