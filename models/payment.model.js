module.exports = (Sequelize, db) => {
  const Payment = db.define(
    "payment",
    {
      card: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      cvv: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      exp: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
    },
    {}
  );

  Payment.associate = (models) => {
    Payment.belongsTo(models.User, {
      foreignKey: "user_id",
    });
  };

  return Payment;
};
