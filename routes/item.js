const router = require("express").Router();
const { catchErrors } = require("../errorHandlers");

const {
  findAllItems,
  findItem,
  addItem,   
  findAllItemsCategory,
} = require("../controllers/itemController");

router.get("/", catchErrors(findAllItems));

router.get("/category/:id", catchErrors(findAllItemsCategory));

router.get("/:id", catchErrors(findItem));

router.post("/add", catchErrors(addItem));


module.exports = router;