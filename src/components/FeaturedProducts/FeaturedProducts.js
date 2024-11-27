import React, { useState } from 'react';
import css from './FeaturedProducts.module.css'; // Asegúrate de tener este archivo de CSS
import { products } from '../../utils/products'; // Productos de referencia

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]); // Estado para controlar el producto seleccionado

  const handleProductChange = (product) => {
    setSelectedProduct(product); // Cambia el producto al hacer click en una miniatura
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
          <span className={css.priceDiscounted}>${selectedProduct.price * 0.8}</span> {/* Precio con 20% de descuento */}
          <span className={css.originalPrice}>${selectedProduct.price}</span>
          <span className={css.discountPercentage}>20% OFF</span>
        </div>

        {/* Cantidad y botón de añadir a la cesta */}
        <div className={css.actions}>
          <input type="number" min="1" defaultValue="1" className={css.quantityInput} />
          <button className={css.addToCartButton}>Añadir a la cesta</button>
        </div>
        
        {/* Mini galería de otros productos */}
        <div className={css.productGallery}>
          {products.map((product) => (
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
