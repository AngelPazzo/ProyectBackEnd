const fs = require(`fs`)

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo
    }

    async save(producto) {
        try {
            const contenido = await fs.promises.readFile(this.archivo, `utf-8`)
            const productos = JSON.parse(contenido)
            producto.id = productos.length + 1
            productos.push(producto)
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos, null, 2))
            return producto.id
        } catch (error) {
            if (error.code === `ENOENT`) {
                await fs.promises.writeFile(this.archivo, `[]`)
                return this.save(producto)
            }
            throw error
        }
    }

    async getById(id) {
        try {
            const contenido = await fs.promises.readFile(this.archivo, `utf-8`)
            const productos = JSON.parse(contenido)
            return productos.find(producto => producto.id === id)
        } catch (error) {
            throw error
        }
    }

    async getAll() {
        try {
            const contenido = await fs.promises.readFile(this.archivo, `utf-8`)
            return JSON.parse(contenido)
        } catch (error) {
            throw error
        }
    }

    async deleteById(id) {
        try {
            const contenido = await fs.promises.readFile(this.archivo, `utf-8`)
            let productos = JSON.parse(contenido)
            productos = productos.filter(producto => producto.id !== id)
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos, null, 2))
        } catch (error) {
            throw error
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archivo, `[]`)
        } catch (error) {
            throw error
        }
    }
}

const contenedor = new Contenedor(`./productos.txt`)

module.exports = Contenedor


//Descomentar para probar los metodos 
//console.log(contenedor.deleteAll());
//console.log(contenedor.save({ title: `Producto 1`, price: 100, thumbnail: `http://url.com/1` }));
//console.log(contenedor.deleteById(1));
//console.log(contenedor.getById(1));
//console.log(contenedor.getAll());


