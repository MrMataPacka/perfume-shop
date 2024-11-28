import React, { useState } from "react";
import classNames from "classnames";
import css from "./CartPage.module.css";
import { getCartProducts, removeProductFromCart, clearCart } from "../../utils/shoppingCartProducts";

const CartPage = () => {
    const [cartProducts, setCartProducts] = useState(getCartProducts());
    const [instructions, setInstructions] = useState("");

    const handleRemoveProduct = (productId) => {
        removeProductFromCart(productId);
        setCartProducts(getCartProducts());
    };

    const handleClearCart = () => {
        clearCart();
        setCartProducts(getCartProducts());
    };

    const calculateSubtotal = () => {
        return cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal(); // Puedes modificar esto para añadir cargos adicionales si los necesitas
    };

    return (
        <div className={css.CartPageContainer}>
            {/* Columna izquierda: Lista de productos */}
            <div className={css.CartProducts}>
                <h1 className={css.CartTitle}>Cesta</h1>

                {/* Encabezados */}
                <div className={classNames(css.CartHeaders, css.CartRow)}>
                    <div>Producto</div>
                    <div>Cantidad</div>
                    <div>Total</div>
                </div>

                {/* Lista de productos */}
                {cartProducts.map((product) => (
                    <div key={product.id} className={classNames(css.CartProduct, css.CartRow)}>
                        <div className={css.CartProductInfo}>
                            <img src={product.image} alt={product.name} className={css.CartProductImage} />
                            <div>
                                <p>{product.name}</p>
                                <p>{product.price}$</p>
                            </div>
                        </div>

                        <div className={css.CartProductQuantity}>
                            <p>{product.quantity}</p>
                        </div>

                        <div className={css.CartProductTotal}>
                            <p>{(product.price * product.quantity).toFixed(2)}$</p>
                        </div>

                        <button className={css.RemoveButton} onClick={() => handleRemoveProduct(product.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}

                <button className={css.ClearCartButton} onClick={handleClearCart}>
                    Limpiar Carrito
                </button>
            </div>

            {/* Columna derecha: Resumen del pedido */}
            <div className={css.CartSummary}>
                <h2>Resumen del pedido</h2>
                <p>Subtotal: {calculateSubtotal().toFixed(2)}$</p>
                <p>Total: {calculateTotal().toFixed(2)}$</p>

                {/* Notas adicionales */}
                <div className={css.CartNotes}>
                    <p>Notas adicionales (opcional):</p>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Escribe instrucciones para el pedido..."
                    />
                </div>

                <button className={css.PayButton}>
                    Pagar
                </button>
            </div>
        </div>
    );
};

export default CartPage;

