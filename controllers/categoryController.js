const { Category, Item } = require("../models");

exports.findAllCategories = async (req, res, next) => {
  await Category.findAll()
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.addCategory = async (req, res, next) => {
  const { name } = req.body;
  const newCategory = new Category({ name });
  newCategory
    .save()
    .then(() => res.json(newCategory))
    .catch((err) => res.status(400).json({ Error: err }));
};

exports.deleteCategory = async (req, res, next) => {
  const category = await Category_Item.findOne({
    where: { category_id: req.params.id },
  });
  category.destroy().then(() => {
    res.status(200).json({
      message: "Category deleted",
    });
  });
};
