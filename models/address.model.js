const Sequelize = require("sequelize");
const db = require("../config/db");

const Address = db.define(
  "address",
  {
    default: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    streetAddress: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    zip: {
      type: Sequelize.STRING(5),
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  },
  {}
);

Address.sync({ alter: true }).then(() => console.log("User table connected"));

module.exports = Address;
