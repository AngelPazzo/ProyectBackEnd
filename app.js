const express = require('express');
const indexRouter = require(`./src/routes/index`);
require (`dotenv`).config();
const app = express();
// const ProductsService = require(`./src/services/products.services.js`);


app.use (express.json());
app.use (express.urlencoded({extended: true}));
app.use (`/`, indexRouter);
app.use (`/public`, express.static(__dirname + "/public/form/"));
app.set ("view engine", "ejs");
app.set ("views", __dirname + "/views/pages");




app.get ("/health", (_req, res) => {
    res.status (200).json({
        success: true,
        environment: process.env.ENVIRONMENT || "undefined",
        health : "OK"
    })
});



 

 

module.exports = app;