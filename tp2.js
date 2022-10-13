const fs = require('fs');
 
class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }
 
    async save(products) {
        try {
            const productos = await this.getAll();
            producto.id = products.length + 1;
            products.push(producto);
            await fs.promises.writeFile(this.archivo, JSON.stringify(products, null, 2));
            return producto.id;
        } catch (error) {
            console.log('Error en save: ', error);
        }
    }
 
    async getById(id) {
        try {
            const products = await this.getAll();
            const producto = products.find((producto) => producto.id === id);
            return producto;
        } catch (error) {
            console.log('Error en getById: ', error);
        }
    }
}