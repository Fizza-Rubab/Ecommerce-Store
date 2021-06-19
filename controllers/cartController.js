const Cart = require("../models/cart.model");

exports.findAllItems = async (req, res) => {
  await Cart.findAll()
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json({ Error: err }));
};

