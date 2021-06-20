const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../errorHandlers");

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
//   router.get("/cart/:id", auth, catchErrors(viewCart));
//   router.put("/item/:id", auth, catchErrors(addOrder));
  router.delete("/delete/:id", catchErrors(deleteUser));
  router.put("/update/:id", auth, catchErrors(updateUser));
  
  module.exports = router;