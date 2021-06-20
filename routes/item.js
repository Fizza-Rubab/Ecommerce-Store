const router = require("express").Router();
// let Item = require("../models/item.model");
const { catchErrors } = require("../errorHandlers");

const {
  findAllItems,
  findItem,
  addItem,   
} = require("../controllers/itemController");

router.get("/", catchErrors(findAllItems));

router.get("/:id", catchErrors(findItem));

router.post("/add", catchErrors(addItem));


module.exports = router;

// router.route("/").get((req, res) => {
//   Item.findAll()
//     .then((items) => res.json(items))
//     .catch((err) => res.status(400).json({ Error: err }));
// });

// router.route("/:id").get((req, res) => {
//     const id = req.params.id;
//     Item.findByPk(id)
//       .then((item) => res.json(item))
//       .catch((err) => res.status(404).json({ Error: err }));
//   });

// router.route("/add").post((req, res) => {
//   const {name, quantity, price, description} = req.body;
//   const newItem = new Item({
//     name,
//     quantity,
//     price,
//     description,
//   });
//   newItem
//     .save()
//     .then(() => res.json({ item: newItem }))
//     .catch((err) => res.status(400).json({ Error: err }));
// });

// module.exports = router;