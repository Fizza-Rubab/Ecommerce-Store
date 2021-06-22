const express = require("express");
const upload = require("multer")();
const path = require("path");

require("dotenv").config();
require("./models");

const app = express();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
}

app.use(require("cors")());
app.use(express.json());

const itemsRouter = require("./routes/item");
app.use("/api/item", itemsRouter(upload));

const usersRouter = require("./routes/user");
app.use("/api/users", usersRouter(upload));

const cartRouter = require("./routes/cart");
app.use("/api/cart", cartRouter);

const categoryRouter = require("./routes/category");
app.use("/api/categories", categoryRouter);

const checkoutRouter = require("./routes/checkout");
app.use("/api/checkout", checkoutRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
