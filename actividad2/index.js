const Product = require('./Products.js');

const model = new Product();

model.addProduct({
    name: 'Teclado',
    description: 'Teclado Mecánico',
    price: 25000,
    stock: 25

});
