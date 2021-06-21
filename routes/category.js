const router = require("express").Router();
const { catchErrors } = require("./errorHandlers");

const {
  findAllCategories,
  addCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.get("/", catchErrors(findAllCategories));

router.post("/add", catchErrors(addCategory));

router.delete("/delete/:id", catchErrors(deleteCategory));

module.exports = router;
