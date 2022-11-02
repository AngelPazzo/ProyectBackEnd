const products = []

class ProductsService{
    constructor(){}

    getProducts(){
        return products
    }

    postProduct(product){
        products.push(product)
        return products;
    }
}

module.exports = ProductsService














// let products = [{
//     name : "Reloj",
//     price : 100,
//     thumbnail : "http://url.com/1"
// }];

// class ProductsService {
//     constructor() {
//         this.products = products;
//     }

//     getProducts() {
//         return this.products;
//     }

//     getProduct(id) {
//         return this.products.find((p) => p.id === parseInt(id));
//     }

//     addProduct(product) {
//         const newProduct = {
//             ...product, id: this.products.length + 1
//         };
//         this.products.push(newProduct);
//         return newProduct;
//     }
// }

//module.exports = ProductsService;