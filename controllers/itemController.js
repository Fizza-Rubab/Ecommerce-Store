const { map } = require("bluebird");
const { Item, Category } = require("../models");

exports.findAllItems = async (req, res) => {
  const items = await Item.findAll({ include: [Category] });
  items.map((item) => {
    item["image"] = Image.findOne({ where: { item_id: item.id } });
  });
};

exports.findAllItemsCategory = async (req, res) => {
  await Item.findAll({ where: { category_id: id }, include: [Category] })
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.addImage = async (req, res) => {
  const { imageType, imageName, imageData } = await req.body;
  const image = new Image({ imageType, imageName, imageData, item_id: id });
  image.save();
};

exports.findItem = async (req, res) => {
  const id = await req.params.id;

  let item = await Item.findByPk(id);

  item["image"] = Image.findAll({ where: { item_id: id } });

  res.json(item);
};

exports.addItem = async (req, res) => {
  const { name, quantity, price, description, seller_id, category_id } =
    req.body;
  const newItem = new Item({
    name,
    quantity,
    price,
    description,
    seller_id,
    category_id,
  });
  newItem
    .save()
    .then(() => res.json({ item: newItem }))
    .catch((err) => res.status(400).json({ Error: err }));
};
