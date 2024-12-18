import React, { useState } from 'react';
import css from './FeaturedProducts.module.css'; // Asegúrate de tener este archivo de CSS
import { products } from '../../utils/products'; // Productos de referencia
import { addProductToCart } from "../../utils/shoppingCartProducts";

const FeaturedProducts = () => {
  // Filtrar productos que tienen descuento
  const discountedProducts = products.filter(product => product.discount === "yes");

  const [selectedProduct, setSelectedProduct] = useState(discountedProducts[0]); // Producto seleccionado
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada

  const handleProductChange = (product) => {
    setSelectedProduct(product); // Cambia el producto al hacer click en una miniatura
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value)); // Actualiza la cantidad
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
        addProductToCart({ ...selectedProduct, quantity: 1 }); // Añade 1 unidad por cada iteración
    }
    alert(`${quantity} ${selectedProduct.name}(s) añadido(s) a la cesta.`);
  };

  const calculateDiscountedPrice = (product) => {
    if (product.discountPorcent) {
      return (product.price * (1 - product.discountPorcent / 100)).toFixed(2); // Aplica el descuento al precio
    }
    return product.price.toFixed(2); // Si no hay descuento, muestra el precio original
  };

  return (
    <div className={css.featuredProduct}>
      {/* Imagen del Producto en Grande */}
      <div className={css.productImage}>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
      </div>

      {/* Información del Producto */}
      <div className={css.productInfo}>
        <h1 className={css.title}>OFERTAS DESTACADAS</h1>
        <h2 className={css.productName}>{selectedProduct.name}</h2>

        {/* Estrellas - puedes usar un paquete de iconos o hacerlo en base a imágenes */}
        <div className={css.stars}>⭐⭐⭐⭐⭐</div>

        {/* Precio con descuento */}
        <div className={css.pricing}>
          <span className={css.priceDiscounted}>${calculateDiscountedPrice(selectedProduct)}</span>
          <span className={css.originalPrice}>${selectedProduct.price.toFixed(2)}</span>
          <span className={css.discountPercentage}>{selectedProduct.discountPorcent}% OFF</span>
        </div>

        {/* Cantidad y botón de añadir a la cesta */}
        <div className={css.actions}>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className={css.quantityInput}
          />
          <button className={css.addToCartButton} onClick={handleAddToCart}>
            Añadir a la cesta
          </button>
        </div>
        
        {/* Mini galería de otros productos */}
        <div className={css.productGallery}>
          {discountedProducts.map((product) => (
            <div
              key={product.id}
              className={css.galleryItem}
              onClick={() => handleProductChange(product)}
            >
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
