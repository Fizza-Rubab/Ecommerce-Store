const Sequelize = require("sequelize");
const db = require("../config/db");

const Order_Item = db.define(
  "order_item",
  {
    quantity: {
      type: Sequelize.STRING(64),
      defaultValue: 1,
    },
    size: {
      type: Sequelize.CHAR,
      defaultValue: 'M',
    },
  },
  {}
);

// Order_Item.sync({ alter: true }).then(() => console.log("Order_Item table connected"));

module.exports = Order_Item;
