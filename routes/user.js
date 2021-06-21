const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("./errorHandlers");

const {
  register,
  login,
  deleteUser,
  updateUser,
  allUsers,
  getUser,
  addImage,
} = require("../controllers/userController");

router.get("/", auth, catchErrors(allUsers));

router.get("/:id", auth, catchErrors(getUser));

router.post("/register", catchErrors(register));

router.post("/login", catchErrors(login));

router.delete("/delete/:id", auth, catchErrors(deleteUser));

router.put("/update/:id", auth, catchErrors(updateUser));

module.exports = (upload) => {
  router.put(
    "/image",
    [auth, upload.single("image")],
    catchErrors(addImage)
  );
  return router;
};
