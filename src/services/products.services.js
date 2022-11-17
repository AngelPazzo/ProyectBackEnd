//inicializa el array con un producto de ejemplo.
//Comentar los ejemplos para visualizar el alert del error.
let products = [
  {
    name: "Cd de musica",
    price: 10,
    thumbnail:"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/spotify-512.png"  },
  {
    name: "Cd de musica",
    price: 100,
    thumbnail:"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/spotify-512.png"  },
    
  ];

//class de productos
class Products {
  constructor() {}
  getproduct() {
    return products;
  }
  saveProduct(product) {
    products.push(product);
    return products;
  }
}
module.exports = Products;
