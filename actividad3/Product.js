const { error } = require('console');
const fs = require('fs/promises');
const path = './data/products.json';
const crypto = require('crypto');  // Importa el módulo crypto para generar UUIDs

class Product {
    products = [];

    constructor(products = []) {
        this.products = products;
    }

    async saveJSON() {
        try {
            const data = JSON.stringify(this.products, null, 2);
            await fs.writeFile(path, data);
        } catch (error) {
            console.log('No se pudo guardar los datos');
        }
    }

    async readJSON() {
        try {
            const data = await fs.readFile(path);
            const products = JSON.parse(data);
            return products;
        } catch (error) {
            console.log('No se pudo leer los datos');
            return [];
        }
    }

    addProduct(product) {
        // Validar datos!
        const id = crypto.randomUUID();
        product.id = id;
        this.products.push(product);
        this.saveJSON();
    }

    async getProducts() {
        this.products = await this.readJSON();
        return this.products;
    }

    async getProductById(id) {
        this.products = await this.readJSON();
        const product = this.products.find(item => item.id === id);
        return product ? product : {};
    }

    // Eliminar producto por ID
    async deleteProductById(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);  // Eliminar el producto del array
            await this.saveJSON();  // Guardar los cambios
            console.log(`Producto con ID ${id} eliminado`);
        } else {
            console.log('Not found');
        }
    }

    // Actualizar producto por ID
    async updateProductById(id, updatedProduct) {
        const index = this.products.findIndex(item => item.id === id);
        if (index !== -1) {
            // Actualizar los valores del producto
            this.products[index] = { ...this.products[index], ...updatedProduct };
            await this.saveJSON();  // Guardar los cambios
            console.log(`Producto con ID ${id} actualizado`);
        } else {
            console.log('Not found');
            return {};  // Retorna objeto vacío si no lo encuentra
        }
    }
}

module.exports = Product;
