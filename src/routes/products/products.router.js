const express = require('express');
const router = express.Router();

let products = [{
    id: 1,
    title: 'Reloj',
    price: 100,
    thumbnail: 'http://url.com/1'
},
{
    id: 2,
    title: 'Celular',
    price: 200,
    thumbnail: 'http://url.com/2'
},
{
    id: 3,
    title: 'Laptop',
    price: 300,
    thumbnail: 'http://url.com/3'
}];

router.get("/", (_req, res) => {
    try {
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
});

router.get("/:id", (req, res) => {
    try {
        const product = products.find((p) => p.id === parseInt(req.params.id));
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);







router.post("/", (req, res) => {
    try {
        const product = {
            ...req.body, id: products.length + 1
        };
        products.push(product);
        res.redirect(`/public/form/index.html`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
        
router.put("/:id", (req, res) => {
    try {
        const product = products.find((p) => p.id === parseInt(req.params.id));
        if (product) {
            const index = products.indexOf(product);
            products[index] = {...product, ...req.body};
            res.status(200).json(products[index]);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", (req, res) => {
    try {
        const product = products.find((p) => p.id === parseInt(req.params.id));
        if (product) {
            products = products.filter((p) => p.id !== product.id);
            res.status(200).json({ message: "Product deleted successfully" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;