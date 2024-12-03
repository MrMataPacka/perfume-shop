let shoppingCart = [];

// Función para añadir un producto al carrito
export const addProductToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = shoppingCart.find(item => item.id === product.id);
    
    if (existingProduct) {
        // Si el producto ya está, aumentar la cantidad
        existingProduct.quantity += 1;
        console.log(`Cantidad de ${product.name} aumentada a ${existingProduct.quantity}`);
    } else {
        // Si no está, añadirlo con una propiedad 'quantity' inicializada en 1
        shoppingCart.push({ ...product, quantity: 1 });
        console.log(`${product.name} añadido al carrito con cantidad 1`);
    }
};

// Función para remover un producto del carrito
export const removeProductFromCart = (productId) => {
    const productIndex = shoppingCart.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        const product = shoppingCart[productIndex];

        if (product.quantity > 1) {
            // Si la cantidad es mayor que 1, reducir la cantidad
            product.quantity -= 1;
            console.log(`Cantidad de ${product.name} reducida a ${product.quantity}`);
        } else {
            // Si la cantidad es 1, eliminar el producto del carrito
            shoppingCart.splice(productIndex, 1);
            console.log(`${product.name} eliminado del carrito!`);
        }
    }
};

// Función para obtener todos los productos en el carrito
export const getCartProducts = () => {
    return shoppingCart;
};

// Función para limpiar el carrito
export const clearCart = () => {
    shoppingCart = [];
    console.log('Carrito limpiado!');
};
