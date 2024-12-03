import React, { useState } from 'react';
import css from './ProductDetail.module.css'; // Asegúrate de tener este archivo de CSS
import { products } from '../../utils/products'; // Productos de referencia
import { addProductToCart } from "../../utils/shoppingCartProducts";

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]); // Producto seleccionado
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada

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
    <div className={css.productDetail}>
      {/* Imagen del Producto en Grande */}
      <div className={css.productImage}>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
      </div>

      {/* Información del Producto */}
      <div className={css.productInfo}>
        <h1 className={css.productName}>{selectedProduct.name}</h1>
        
        {/* Estrellas - puedes usar un paquete de iconos o hacerlo en base a imágenes */}
        <div className={css.stars}>⭐⭐⭐⭐⭐</div>

        {/* Precio con descuento */}
        <div className={css.pricing}>
          <span className={css.priceDiscounted}>${calculateDiscountedPrice(selectedProduct)}</span>
          <span className={css.originalPrice}>${selectedProduct.price.toFixed(2)}</span>
          {selectedProduct.discountPorcent && (
            <span className={css.discountPercentage}>{selectedProduct.discountPorcent}% OFF</span>
          )}
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
      </div>

      {/* Carousel con otros productos */}
      <div className={css.carousel}>
        <h2 className={css.carouselTitle}>Otros productos</h2>
        <div className={css.productGallery}>
          {products.map((product) => (
            <div
              key={product.id}
              className={css.galleryItem}
              onClick={() => setSelectedProduct(product)} // Cambia el producto al hacer click
            >
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
