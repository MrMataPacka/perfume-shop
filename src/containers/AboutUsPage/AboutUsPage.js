import css from './AboutUsPage.module.css';
import React from 'react';
import logo from '../../logo.svg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { CartPage } from "../../components";
import { AboutUs } from "../../components";
import { products } from "../../utils/products";


const AboutUsPage = () => {
    return (
        <div>
            <Navbar />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default AboutUsPage;

