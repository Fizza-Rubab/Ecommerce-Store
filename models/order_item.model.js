module.exports = (Sequelize, db) => {
  const Order_Item = db.define(
    "order_item",
    {
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      size: {
        type: Sequelize.CHAR,
        defaultValue: "M",
      },
    },
    {}
  );

  return Order_Item;
};
