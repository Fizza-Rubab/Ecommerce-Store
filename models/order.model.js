const Sequelize = require("sequelize");
const db = require("../config/db");

const Order = db.define(
  "order",
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

Order.sync({ alter: true }).then(() => console.log("Cart table connected"));

module.exports = Order;
