const { Item } = require("../models");

exports.findAllItems = async (req, res) => {
  await Item.findAll()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.findItem = async (req, res) => {
  const id = await req.params.id;
  Item.findByPk(id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ Error: err }));
};

exports.addItem = async (req, res) => {
  const { name, quantity, price, description, seller_id, category_id } = req.body;
  const newItem = new Item({ name, quantity, price, description, seller_id, category_id });
  newItem
    .save()
    .then(() => res.json({ item: newItem }))
    .catch((err) => res.status(400).json({ Error: err }));
};
