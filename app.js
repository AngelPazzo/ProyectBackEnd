const express = require('express');
// const indexRouter = require(`./src/routes/index.js`);
require (`dotenv`).config();
let fs = require(`fs`);
const app = express();
const ProductsService = require(`./src/services/products.services.js`);

app.use (express.json());
app.use (express.urlencoded({extended: true}));
app.set ("views", "./views");
app.set ("view engine", "ejs");

 //index page
// app.use (`/`, function (_req, res) {
//     res.render (`index`);
// });
app.get ("/health", (_req, res) => {
    res.status (200).json({
        success: true,
        environment: process.env.ENVIRONMENT || "undefined",
        health : "OK"
    })
});
app.get (`/`, (_req , res) => {
    const productsService = new ProductsService();
    res.render (`pages/index`, { products: productsService.getProducts()});
});

app.post (`/products`, (req, res) => {
    const {name, price, image} = req.body;
    const productsService = new ProductsService();
    productsService.postProduct({name, price, image});
    res.redirect (`/`);
});

app.get (`/products`, (_req, res) => {
    const productsService = new ProductsService();
    res.render (`pages/products`, { products: productsService.getProducts()});
});



// app.use (`/public`, express.static(__dirname + "/public/form/"));

// app.use (`/`, indexRouter);

module.exports = app;