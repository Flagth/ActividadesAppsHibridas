const Product = require('./Product');

const model = new Product();
console.log('inicio de la promesa');
model.getProducts().then(lista =>{
    console.table(lista);
})
console.log('fin de la promesa');

async function buscar(id){
    const product = await model.getProductById(id);
    console.log(product);
}

buscar('609a07fb-3376-4bde-8941-63ed56a8946e');
/*model.addProduct ( {
    name: 'Teclado dos',
    description: 'Teclado Mecánico',
    price: 25000,
    stock: 25
});

model.addProduct ( {
    name: 'Mouse',
    description: 'Mouse',
    price: 15000,
    stock: 20
}); */