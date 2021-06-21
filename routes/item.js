const router = require("express").Router();
const { catchErrors } = require("./errorHandlers");
const auth = require("../middlewares/auth");

const {
  findAllItems,
  findItem,
  addItem,
  findAllItemsCategory,
  addImage,
  getImages,
  deleteItem,
} = require("../controllers/itemController");

router.get("/", catchErrors(findAllItems));

router.get("/category/:id", catchErrors(findAllItemsCategory));

router.get("/:id", catchErrors(findItem));

router.post("/add", auth, catchErrors(addItem));

router.get("/images/:id", catchErrors(getImages));

router.delete("/delete/:id", auth, catchErrors(deleteItem));

module.exports = (upload) => {
  router.post(
    "/addImage/:id",
    [auth, upload.array("images", 10)],
    catchErrors(addImage)
  );
  return router;
};
