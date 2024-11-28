import React, { Component } from "react";
import classNames from "classnames";
import css from "./ProductCard.module.css";
import { products } from "../../utils/products";
import { addProductToCart } from "../../utils/shoppingCartProducts";

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderFilter: '',
            typeFilter: '',
            brandFilter: '',
            priceFilter: '',
        };
    }

    

    // Función para manejar los cambios en los filtros
    handleFilterChange = (filterName, value) => {
        this.setState({ [filterName]: value });
    };

    // Función para aplicar los filtros a los productos
    applyFilters = () => {
        const { genderFilter, typeFilter, brandFilter, priceFilter } = this.state;

        return products.filter(product => {
            const matchesGender = genderFilter ? product.gender === genderFilter : true;
            const matchesType = typeFilter ? product.type === typeFilter : true;
            const matchesBrand = brandFilter ? product.brand === brandFilter : true;
            let matchesPrice = true;

            if (priceFilter) {
                if (priceFilter === 'mayor') {
                    matchesPrice = product.price > 1000; // Cambia 1000 por el valor que desees comparar
                } else if (priceFilter === 'menor') {
                    matchesPrice = product.price < 1000;
                }
            }

            return matchesGender && matchesType && matchesBrand && matchesPrice;
        });
    };

    handleAddToCart = (product) => {
        addProductToCart(product); // Llamar a la función que añade el producto al carrito
    };

    render() {
        const filteredProducts = this.applyFilters(); // Obtener productos filtrados

        return (
            <div className={css.ProductCardContainer}>
                <h1>Nuestros Productos</h1>

                {/* Filtros */}
                <div className={css.Filters}>
                    <select onChange={(e) => this.handleFilterChange('genderFilter', e.target.value)} defaultValue="">
                        <option value="">Filtrar por Género</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                    </select>

                    <select onChange={(e) => this.handleFilterChange('typeFilter', e.target.value)} defaultValue="">
                        <option value="">Filtrar por Tipo</option>
                        <option value="perfume">Perfume</option>
                        <option value="crema">Crema</option>
                        <option value="gel">Gel</option>
                        <option value="colonia">Colonia</option>
                    </select>

                    <select onChange={(e) => this.handleFilterChange('brandFilter', e.target.value)} defaultValue="">
                        <option value="">Filtrar por Marca</option>
                        <option value="Chanel">Chanel</option>
                        <option value="Dior">Dior</option>
                    </select>

                    <select onChange={(e) => this.handleFilterChange('priceFilter', e.target.value)} defaultValue="">
                        <option value="">Filtrar por Precio</option>
                        <option value="mayor">Mayor a 1000$</option>
                        <option value="menor">Menor a 1000$</option>
                    </select>
                </div>

                {/* Mostrar los productos filtrados */}
                <div className={css.ProductCardWrapper}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className={classNames(css.ProductCard)}>
                                <div className={css.ProductCard_header}>
                                    <img className={css.ProductCard_img} src={product.image} alt={product.name} />
                                </div>
                                <div className={css.ProductCard_body}>
                                    <h2 className={css.ProductCard_name}>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p className={css.ProductCard_price}>{product.price + "$"}</p>
                                </div>
                                <button 
                                    className={css.ProductCard_button} 
                                    onClick={() => this.handleAddToCart(product)}>
                                    Añadir a la Cesta
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No se encontraron productos con los filtros seleccionados.</p>
                    )}
                </div>
            </div>
        );
    }
}

export default ProductCard;
