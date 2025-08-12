const crypto = require('crypto'); // necesario para usar crypto.randomUUID()

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        // Validar campos obligatorios
        const requiredFields = ['title', 'description', 'price', 'stock'];
        for (const field of requiredFields) {
            if (!product[field]) {
                console.log(`Falta el campo obligatorio: ${field}`);
                return;
            }
        }

        // Generar ID único
        const id = crypto.randomUUID();

        // Verificar que no se repita el ID (por si acaso, aunque UUID no se repite)
        const exists = this.products.find(p => p.id === id);
        if (exists) {
            console.log('ID duplicado');
            return;
        }

        const newProduct = {
            id,
            title: product.title,
            description: product.description,
            price: product.price,
            stock: product.stock
        };

        this.products.push(newProduct);
        console.log('Producto agregado:', newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log('Not found');
            return;
        }
        return product;
    }
}

module.exports = ProductManager;
