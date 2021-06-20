module.exports = (Sequelize, db) => {
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
      description: Sequelize.TEXT,
    },
    {}
  );

  // Item.sync({ alter: true }).then(() => console.log("Item table connected"));

  Item.associate = (models) => {
    Item.belongsTo(models.Category, {
      foreignKey: "category_id",
    });
    Item.belongsTo(models.User, {
      foreignKey: "seller_id",
    });
    Item.belongsToMany(models.Order, {
      through: models.Order_Item,
      foreignKey: "item_id",
    });
  };

  return Item;
};
