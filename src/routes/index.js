const express = require('express');
const router = express.Router();
const productsRoutes = require(`./products/products.routes.js`);
// const products = require(`./endpoints.js`);

router.get("/health", async (_req, res) => {
    res.status(200).json({ 
        success: true,
        environment: process.env.ENVIRONMENT || "undefined",
        health: "OK"
    });
});

router.use(`/products`, productsRoutes);

// router.use(`/`, products);

module.exports = router;