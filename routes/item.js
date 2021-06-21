const router = require("express").Router();
const { catchErrors } = require("../errorHandlers");

const {
  findAllItems,
  findItem,
  addItem,
  findAllItemsCategory,
  addImage,
  getImages,
} = require("../controllers/itemController");

router.get("/", catchErrors(findAllItems));

router.get("/category/:id", catchErrors(findAllItemsCategory));

router.get("/:id", catchErrors(findItem));

router.post("/add", catchErrors(addItem));

router.get("/images/:id", catchErrors(getImages));

module.exports = (upload) => {
  router.post(
    "/addImage/:id",
    upload.array("images", 10),
    catchErrors(addImage)
  );

  return router;
};
