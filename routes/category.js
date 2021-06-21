const router = require("express").Router();
const { catchErrors } = require("./errorHandlers");
const auth = require("../middlewares/auth");

const {
  findAllCategories,
  addCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.get("/", catchErrors(findAllCategories));

router.post("/add", auth, catchErrors(addCategory));

router.delete("/delete/:id", auth, catchErrors(deleteCategory));

module.exports = router;
