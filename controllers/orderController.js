const Order = require("../models/order.model");
const Order_Item = require("../models/order_item.model");
const Item = require("../models/item.model");

exports.findAllItems = async (req, res) => {
  await Order.findAll()
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.addItem = async (req, res) => {
  const { id, quantity, size } = req.body;
  const item = await Item.findByPk({id})

  const order_item = new Order_Item({
    name,
    quantity,
    price,
    size
  });
  const order = new Order({item })
  await order_item.save();

  res.json({
    message: `Item ${userName} has been added to your cart successfully!`,
  });
}