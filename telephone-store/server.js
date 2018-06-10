const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/products", function(req, res) {
  return res.send(products);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);

const products = [
  {
    name: "Galaxy S9",
    price: 650
  },
  {
    name: "iPhone 7",
    price: 750
  },
  {
    name: "HTC",
    price: 400
  },
  {
    name: "iPhone 4s",
    price: 10
  },
  {
    name: "Nokia",
    price: 200
  },
  {
    name: "Huawei",
    price: 350
  },
  {
    name: "Galaxy S5",
    price: 100
  },
  {
    name: "Xperia",
    price: 250
  },
  {
    name: "Wiko",
    price: 130
  }
];
