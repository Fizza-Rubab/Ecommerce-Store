const Sequelize = require("sequelize");
const db = require("../config/db");

const Cart = db.define(
  "cart",
  {
    ordered: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    timeStarted: {
      type: Sequelize.DATETIME(),
      allowNull: false,
    },
    timeFinished: {
      type: Sequelize.DATETIME(),
      allowNull: false,
    },
    shipmentType: {
      type: Sequelize.CHAR(20),
      allowNull: false,
    },
  },
  {}
);

Cart.sync({ alter: true }).then(() => console.log("Cart table connected"));

module.exports = Cart;
