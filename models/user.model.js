const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "user",
  {
    userName: {
      type: Sequelize.STRING(64),
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING(64),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be a valid email",
        },
      },
    },
    password: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    seller: {
      type: Sequelize.BOOL,
      default: false,
    },
  },
  {}
);

Item.sync({ alter: true }).then(() => console.log("User table connected"));

module.exports = Item;
