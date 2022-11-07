let products = [
     {
     name : "Tablita",
     price : 10000,
     image : "https://cdn3.iconfinder.com/data/icons/lifestyle-entertainment-vol-1/512/surf_surfing_surfboard_sports-64.png "
 }
]


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