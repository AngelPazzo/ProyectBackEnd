const fs = require('fs');
 
class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }
 
    async save(products) {
        try {
            const productos = await this.getAll();
            producto.id = productos.length + 1;
            productos.push(producto);
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos, null, 2));
            return producto.id;
        } catch (error) {
            console.log('Error en save: ', error);
        }
    }
 
    async getById(id) {
        try {
            const productos = await this.getAll();
            const producto = productos.find((producto) => producto.id === id);
            return producto;
        } catch (error) {
            console.log('Error en getById: ', error);
        }
    }
}