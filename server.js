require("dotenv").config();
const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/products-image", express.static("public/products-image"));

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// routes
app.use("/api/products", productRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});