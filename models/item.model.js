const Sequelize = require("sequelize");
const db = require("../config/db");

const Item = db.define(
  "item",
  {
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
  },
  {}
);

Item.sync({ alter: true }).then(() => console.log("Item table connected"));

module.exports = Item;
