const Sequelize = require("sequelize");
const db = require("../config/db");

const Payment = db.define(
  "payment",
  {
    card: {
      type: Sequelize.STRING(16),
      allowNull: false,
      unique: true,
    },
    cvv: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    exp: {
      type: Sequelize.STRING(5),
      allowNull: false,
    },
    ordered: {
      type: Sequelize.BOOLEAN,
    },
  },
  {}
);

// Order.sync({ alter: true }).then(() => console.log("Order table connected"));

Payment.associate = (models) => {
  Payment.belongsTo(models.User, {
    foreignKey: "user_id",
  });
};

module.exports = Payment;
