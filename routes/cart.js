const router = require("express").Router();
// let Item = require("../models/item.model");
const { catchErrors } = require("../errorHandlers");

const {
  findAllItems,
} = require("../controllers/cartController");

router.get("/", catchErrors(findAllItems));

module.exports = router;
