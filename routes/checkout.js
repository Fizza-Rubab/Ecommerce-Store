const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("./errorHandlers");

const { checkingOut } = require("../controllers/checkoutController");

router.post("/", auth, catchErrors(checkingOut));

module.exports = router;
