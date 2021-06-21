const router = require("express").Router();
const { catchErrors } = require("./errorHandlers");

const {
  findAllCategories,
  addCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.get("/", catchErrors(findAllCategories));

router.get("/add", catchErrors(addCategory));

router.get("/delete", catchErrors(deleteCategory));

module.exports = router;
