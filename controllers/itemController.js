const { Item, Category, Image, User } = require("../models");

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

exports.findAllItems = async (req, res, next) => {
  let items = await Item.findAll({
    include: [Category],
    raw: true,
    nest: true,
  });
  await asyncForEach(items, async (item) => {
    item.image = await Image.findOne({
      where: { item_id: item.id },
      raw: true,
    });
    if (item.image)
      item.image.imageData = item.image.imageData.toString("base64");
  });
  res.json(items);
};

exports.findAllItemsCategory = async (req, res, next) => {
  await Item.findAll({ where: { category_id: id }, include: [Category] })
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.addImage = async (req, res, next) => {
  const id = req.params.id;
  req.files.forEach((file) => {
    const image = new Image({
      imageType: file.mimetype,
      imageName: file.originalname,
      imageData: file.buffer,
      item_id: id,
    });
    image.save().then();
  });
  res.status(201).json("uploaded");
};

exports.getImages = async (req, res, next) => {
  const id = req.params.id;
  let images = await Image.findAll({ where: { item_id: id } });
  images.forEach((image) => {
    image.imageData = image.imageData.toString("base64");
  });
  res.json(images);
};

exports.findItem = async (req, res) => {
  const id = req.params.id;

  let item = await Item.findOne({ where: { id }, raw: true, nest: true });

  item.images = await Image.findAll({
    where: { item_id: id },
    raw: true,
    nest: true,
  });

  if (item.images)
    item.images.forEach((image) => {
      image.imageData = image.imageData.toString("base64");
    });

  res.json(item);
};

exports.addItem = async (req, res, next) => {
  const seller_id = req.user;
  const user = await User.findByPk(seller_id);
  if (!user.seller) return res.status(401).json({ message: "Unauthorized 👀" });
  const { name, quantity, price, description, category_id } = req.body;
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

exports.deleteItem = async (req, res, next) => {
  const id = req.params.id;
  const item = await Item.findByPk(id);
  if (req.user != item.seller_id)
    return res.status(401).json({ message: "Unauthorized 👀" });
  item
    .destroy()
    .then(() => {
      res.json({ message: "item deleted" });
    })
    .catch((err) => {
      res.json(err);
    });
};
