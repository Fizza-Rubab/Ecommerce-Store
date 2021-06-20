const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../errorHandlers");

const {
  findAllItems,
  addItems,
  deleteItems,
  updateItems,
} = require("../controllers/cartController");

router.get("/", auth, catchErrors(findAllItems));

router.post("/add", auth, catchErrors(addItems));

router.delete("/delete", auth, catchErrors(deleteItems));

router.put("/update", auth, catchErrors(updateItems));


module.exports = router;

