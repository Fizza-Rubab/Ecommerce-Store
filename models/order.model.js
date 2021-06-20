module.exports = (Sequelize, db) => {
  const Order = db.define(
    "order",
    {
      timeStarted: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      timeFinished: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      shipmentType: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      ordered: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {}
  );

  // Order.sync({ alter: true }).then(() => console.log("Order table connected"));

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: "buyer_id",
    });
    Order.belongsTo(models.Payment, {
      foreignKey: "payment_id",
    });
    Order.belongsTo(models.Address, {
      foreignKey: "address_id",
    });
    Order.belongsToMany(models.Item, {
      through: models.Order_Item,
      foreignKey: "order_id",
    });
  };

  return Order;
};
