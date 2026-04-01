const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); 
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json([{ id: 1, name: "Product 1" }]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));