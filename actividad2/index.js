const ProductManager = require('./Products.js');

const manager = new ProductManager();

manager.addProduct({
    title: 'Teclado',
    description: 'Teclado Mecánico',
    price: 25000,
    stock: 25
});

console.log(manager.getProducts());
