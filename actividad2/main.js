const ProductManager = require('./Products.js');

const manager = new ProductManager();

// Agregar productos
manager.addProduct({
    title: 'Teclado',
    description: 'Teclado Mecánico',
    price: 25000,
    stock: 25
});

manager.addProduct({
    title: 'Mouse',
    description: 'Mouse Inalámbrico',
    price: 15000,
    stock: 10
});

// Obtener todos los productos
console.log('Todos los productos:', manager.getProducts());

// Buscar uno por ID (probá con uno real después de hacer un `console.log`)
const productos = manager.getProducts();
const primerId = productos[0]?.id;

if (primerId) {
    console.log('Buscar por ID:', manager.getProductById(primerId));
}

console.log('Buscar ID inexistente:');
manager.getProductById('id-que-no-existe');
