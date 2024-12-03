import React from 'react';
import css from './AloneProductPage.module.css'; // Importar el archivo de estilos como objeto
import logo from '../../logo.svg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { CartPage } from "../../components";
import { ProductDetail} from "../../components";
import { products } from "../../utils/products";

const AloneProductPage = () => {
  return (
    <div>
        <Navbar />
        <ProductDetail />
        <Footer />
    </div>
  );
};

export default AloneProductPage;