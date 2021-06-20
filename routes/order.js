const router = require("express").Router();
const auth = require("../middlewares/auth");
// let Item = require("../models/item.model");
const { catchErrors } = require("../errorHandlers");

const {
  findAllItems,
  addItems,
} = require("../controllers/cartController");

router.get("/", auth, catchErrors(findAllItems));

router.post("/add", auth, catchErrors(addItems));

module.exports = router;

