const express = require("express");
const upload = require("multer")();
require("dotenv").config();
require("./models");

const app = express();

const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
