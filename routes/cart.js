const router = require("express").Router();
const auth = require("../middlewares/auth");
// let Item = require("../models/item.model");
const { catchErrors } = require("../errorHandlers");

const {
  findAllItems,
  addItems,
  deleteItems,
} = require("../controllers/cartController");

router.get("/", auth, catchErrors(findAllItems));

router.post("/add", auth, catchErrors(addItems));

router.delete("/delete", auth, catchErrors(deleteItems));


module.exports = router;

