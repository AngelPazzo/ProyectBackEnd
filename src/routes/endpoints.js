const express = require('express');
const router = express.Router();
const ProductsService = require(`../services/products.services.js`);






 router.get (`/`, (_req , res) => {
     const productsService = new ProductsService();
     res.render ("index", { products: productsService.getProducts()});
 });

router.post (`/products`, (req, res) => {
    const {name, price, image} = req.body;
    const productsService = new ProductsService();
    productsService.postProduct({name, price, image});
    res.redirect (`/`);
});

router.get (`/products`, (_req, res) => {
    const productsService = new ProductsService();
    res.render (`products`, { products: productsService.getProducts()});
});

module.exports = router;