module.exports = (Sequelize, db) => {
  const Order = db.define(
    "order",
    {
      timeStarted: Sequelize.DATE,
      timeFinished: Sequelize.DATE,
      shipmentType: Sequelize.STRING(1),
      ordered: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {}
  );

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
