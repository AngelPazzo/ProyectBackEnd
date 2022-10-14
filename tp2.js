const fs = require(`fs`)

class Contenedor {
    constructor(name){
        this.name = name
    }
    save (producto){
        const products = fs.readFileSync(`${this.name}.txt`, `utf-8`)
        const parsedProducts = JSON.parse(products)
        if(oarsedProducts.length == 0){
            Object.assign(product, {
                id:1
            })
            parsedProducts.push(producto)
            fs.writeFileSync(JSON.stringify(parsedProducts, null, 2))
            return 1
        } else{
            parsedProducs.forEach(
                
            });
        }

    }
}

const container = ner Contenedor (`products`)

console.log(container.save({
    name: "Bicicleta"
    price: 33000

}))