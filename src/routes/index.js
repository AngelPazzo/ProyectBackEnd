const express = require('express');
const router = express.Router();
const products = require(`./endpoints.js`);

router.get("/health", (_req, res) => {
    res.status(200).json({ 
        message: "Server is up and running",
        status: "OK",
        environment : process.env.NODE_ENV || "development"
    });
});

router.use(`/`, products);

module.exports = router;