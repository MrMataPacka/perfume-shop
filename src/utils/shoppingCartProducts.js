// utils/shoppingCartProducts.js

let shoppingCart = [
    {
        id: 1,
        name: 'BLEU DE CHANEL',
        price: 899,
        description: 'GEL DE DUCHA',
        image: "https://ss701.liverpool.com.mx/xl/1001719633.jpg",
        gender: 'hombre', // Perfume para hombres
        type: 'gel', // Tipo de producto: Gel de ducha
        brand: 'Chanel', // Marca del producto
        quantity: 1
      },
      {
        id: 2,
        name: 'COCO MADEMOISELLE',
        price: 1199,
        description: 'EAU DE PARFUM',
        image: "https://ss701.liverpool.com.mx/xl/1068402758.jpg",
        gender: 'mujer', // Perfume para mujeres
        type: 'perfume', // Tipo de producto: Perfume
        brand: 'Chanel', // Marca del producto
        quantity: 1
      },
      {
        id: 3,
        name: 'J’ADORE',
        price: 1350,
        description: 'LOCIÓN CORPORAL',
        image: "https://ss701.liverpool.com.mx/xl/14320504.jpg",
        gender: 'mujer', // Para mujeres
        type: 'crema', // Tipo de producto: Loción corporal
        brand: 'Dior', // Marca del producto
        quantity: 2
      },
      {
        id: 4,
        name: 'SAUVAGE',
        price: 1500,
        description: 'EAU DE TOILETTE',
        image: "https://ss701.liverpool.com.mx/xl/1073589495.jpg",
        gender: 'hombre', // Perfume para hombres
        type: 'colonia', // Tipo de producto: Colonia
        brand: 'Dior', // Marca del producto
        quantity: 4
      },
];

// Función para añadir un producto al carrito
export const addProductToCart = (product) => {
    shoppingCart.push(product);
    console.log(`${product.name} añadido al carrito!`);
};

// Función para eliminar un producto del carrito (opcional, por si necesitas eliminar productos)
export const removeProductFromCart = (productId) => {
    shoppingCart = shoppingCart.filter(product => product.id !== productId);
    console.log(`Producto con id ${productId} eliminado del carrito!`);
};

// Función para obtener todos los productos en el carrito
export const getCartProducts = () => {
    return shoppingCart;
};

// Función para limpiar el carrito (opcional)
export const clearCart = () => {
    shoppingCart = [];
    console.log('Carrito limpiado!');
};
