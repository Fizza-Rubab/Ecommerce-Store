const Order = require("../models/order.model");

exports.findAllItems = async (req, res) => {
  await Order.findAll()
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json({ Error: err }));
};

