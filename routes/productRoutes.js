const express = require("express");
const router = express.Router();

const { products, categories } = require("../products");

// Categories (MOST specific → pehle)
router.get("/categories", (req, res) => {
    res.json(categories);
});

// All products
router.get("/", (req, res) => {
    res.json(products);
});

// Single product (dynamic → last me)
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
});

module.exports = router;