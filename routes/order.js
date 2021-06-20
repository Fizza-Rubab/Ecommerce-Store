const router = require("express").Router();
const auth = require("../auth");
// let Item = require("../models/item.model");
const { catchErrors } = require("../errorHandlers");

const {
  findAllItems,
  addItem,
} = require("../controllers/cartController");

router.get("/", auth, catchErrors(findAllItems));

router.post("/add", auth, catchErrors(addItem));

module.exports = router;

