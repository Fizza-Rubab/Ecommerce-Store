const { Category, Item } = require("../models");

exports.findAllCategories = async (req, res) => {
  await Category.findAll()
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.addCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = new Category({ name });
  newCategory
    .save()
    .then(() => res.json({ category: newCategory }))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.deleteCategory = async (req, res, next) => {
  const { category_id } = await req.body;
  const category = await Category_Item.findOne({ where: { category_id } });
  category.destroy().then(() => {
    res.status(200).json({
      message: "Category deleted",
    });
  });
  const items = await Item.findAll();
  items.destroy();
};
