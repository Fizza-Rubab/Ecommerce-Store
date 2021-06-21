const { Item, Category, Image } = require("../models");

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

exports.findAllItems = async (req, res) => {
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
  });
  res.json(items);
};

exports.findAllItemsCategory = async (req, res) => {
  await Item.findAll({ where: { category_id: id }, include: [Category] })
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.addImage = async (req, res) => {
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

exports.getImages = async (req, res) => {
  const id = req.params.id;
  const images = await Image.findAll({ where: { item_id: id } });
  res.json(images);
};

exports.findItem = async (req, res) => {
  const id = req.params.id;

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
