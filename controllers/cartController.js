const { Order, Item, Order_Item, User } = require("../models");

exports.addItems = async (req, res, next) => {
  const { item_id, quantity, size } = await req.body;

  let cart = await Order.findOne({
    where: { ordered: false, buyer_id: req.user },
  });
  if (!cart) {
    cart = new Order({ buyer_id: req.user });
    cart.quantity = 12;
    await cart.save();
  }

  const order_item = new Order_Item({
    order_id: cart.id,
    size,
    quantity,
    item_id,
  });

  await order_item.save();

  res.status(201).json(order_item);
};
exports.findAllItems = async (req, res, next) => {
  await Order.findAll({
    where: { ordered: false, buyer_id: req.user },
    include: [Item],
  })
    .then((order_item) => res.json(order_item))
    .catch((err) => res.status(400).json({ Error: err }));
};
