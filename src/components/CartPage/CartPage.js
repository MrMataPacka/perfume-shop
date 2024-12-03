import React, { useState } from "react";
import classNames from "classnames";
import css from "./CartPage.module.css";
import { getCartProducts, removeProductFromCart, clearCart } from "../../utils/shoppingCartProducts";
import { promotionalCodes } from "../../utils/promotionalCodes";

const CartPage = () => {
    const [cartProducts, setCartProducts] = useState(getCartProducts());
    const [instructions, setInstructions] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);

    const handleRemoveProduct = (productId) => {
        removeProductFromCart(productId);
        setCartProducts([...getCartProducts()]); 
    };

    const handleClearCart = () => {
        clearCart();
        setCartProducts([]);
    };

    const applyPromoCode = () => {
        const code = promotionalCodes.find(code => code.name === promoCode);
        if (code) {
            setDiscountPercent(code.discountPorcent);
            alert(`Código aplicado! Descuento del ${code.discountPorcent}%`);
        } else {
            setDiscountPercent(0);
            alert("Código no válido");
        }
    };

    const calculateSubtotal = () => {
        return cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
    };

    const calculateTotalWithPromoCode = () => {
        const subtotal = calculateTotalSaved();
        const discount = (subtotal * discountPercent) / 100;
        return subtotal - discount;
    };

    const calculateTotalSaved = () => {
        return cartProducts.reduce((acc, product) => {
            if (product.discount === "yes") {
                const savings = product.price * (product.discountPorcent / 100);
                return acc + savings * product.quantity;
            }
            return acc;
        }, 0);
    };

    return (
        <div className={css.CartPageContainer}>
            <div className={css.CartProducts}>
                <h1 className={css.CartTitle}>Cesta</h1>
                <div className={classNames(css.CartHeaders, css.CartRow)}>
                    <div>Producto</div>
                    <div>Cantidad</div>
                    <div>Precio Original</div>
                    <div>Descuento</div>
                    <div>Total</div>
                </div>

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

                        <div className={css.CartProductOriginalPrice}>
                            <p>{product.price}$</p>
                        </div>

                        <div className={css.CartProductDiscount}>
                            {product.discount === "yes" ? (
                                <>
                                    <p>{product.discountPorcent}% OFF</p>
                                    <p className={css.newPrice}>Nuevo precio: {(product.price * (1 - product.discountPorcent / 100)).toFixed(2)}$</p>
                                </>
                            ) : (
                                <p>No hay descuento</p>
                            )}
                        </div>

                        <div className={css.CartProductTotal}>
                            {product.discount === "yes"
                                ? <p className={css.newPrice}>{(product.price * (1 - product.discountPorcent / 100) * product.quantity).toFixed(2)}$</p>
                                : <p className={css.newPrice}>{(product.price * product.quantity).toFixed(2)}$</p>}
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

            <div className={css.CartSummary}>
                <h2>Resumen del pedido</h2>
                <p>Subtotal (sin descuento): {calculateSubtotal().toFixed(2)}$</p>
                <p className={css.CartTotal}>Total: {calculateTotalWithPromoCode().toFixed(2)}$</p>
                <p className={css.CartTotalSaved}>Total ahorrado: {calculateTotalSaved().toFixed(2)}$</p>

                <div className={css.PromoCodeSection}>
                    <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Ingresa código promocional"
                        className={css.PromoCodeInput}
                    />
                    <button onClick={applyPromoCode} className={css.ApplyPromoButton}>
                        Aplicar
                    </button>
                </div>

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



