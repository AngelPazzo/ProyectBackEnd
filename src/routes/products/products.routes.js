const express = require('express');
const {v4: uuidv4} = require('uuid');
const _ = require('lodash');
const router = express.Router();

router.post(`/`, async (req, res, next) => {
    try {
        const {body} = req;
        if (_.isNil(body)) (res.status(400).json({success: false, message: "Bad request"}));
        Object.assign(body, {id: uuidv4()});
        res.status(201).json({success: true, message: "Product created", data: body});
    } catch (error) {
        next(error);
    }
});

module.exports = router;





















//antiguo tp


// router.get("/", (_req, res) => {
//     try {
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message : error.message });
//     }
// });

// router.get("/:id", (req, res) => {
//     try {
//         const product = products.find((p) => p.id === parseInt(req.params.id));
//         if (product) {
//             res.status(200).json(product);
//         } else {
//             res.status(404).json({ message: "Product not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
// );







//  router.post("/", (req, res) => {
//      try {
//          const product = {
//              ...req.body, id: products.length + 1
//          };
//          products.push(product);
//          res.redirect("public/index.html");
//      } catch (error) {
//          res.status(500).json({ message: error.message });
//      }
//  });

   
// router.put("/:id", (req, res) => {
//     try {
//         const product = products.find((p) => p.id === parseInt(req.params.id));
//         if (product) {
//             const index = products.indexOf(product);
//             products[index] = {...product, ...req.body};
//             res.status(200).json(products[index]);
//         } else {
//             res.status(404).json({ message: "Product not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// router.delete("/:id", (req, res) => {
//     try {
//         const product = products.find((p) => p.id === parseInt(req.params.id));
//         if (product) {
//             products = products.filter((p) => p.id !== product.id);
//             res.status(200).json({ message: "Product deleted successfully" });
//         } else {
//             res.status(404).json({ message: "Product not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

