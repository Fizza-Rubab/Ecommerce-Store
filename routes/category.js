const router = require("express").Router();
const { catchErrors } = require("../errorHandlers");

const {
  findAllCategories,
  addCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.get("/", catchErrors(findAllCategories));

router.post("/add", catchErrors(addCategory));

router.get("/delete", catchErrors(deleteCategory));

module.exports = router;
