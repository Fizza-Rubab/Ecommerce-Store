const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("./errorHandlers");

const {
  register,
  login,
  deleteUser,
  updateUser,
  allUsers,
} = require("../controllers/userController");

router.get("/", catchErrors(allUsers));
router.post("/register", catchErrors(register));
router.post("/login", catchErrors(login));
router.delete("/delete", catchErrors(deleteUser));
router.put("/update", auth, catchErrors(updateUser));

module.exports = router;
