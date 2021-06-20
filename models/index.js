const Sequelize = require("sequelize");
const db = require("../config/db");

const models = {
  User: require("./user.model")(Sequelize, db),
  Item: require("./item.model")(Sequelize, db),
  Category: require("./category.model")(Sequelize, db),
  Address: require("./address.model")(Sequelize, db),
  Image: require("./image.model")(Sequelize, db),
  Order: require("./order.model")(Sequelize, db),
  Order_Item: require("./order_item.model")(Sequelize, db),
  Payment: require("./payment.model")(Sequelize, db),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
  models[modelName].sync().then(() => console.log(`${modelName} table connected`));
});

models.sequelize = db;

module.exports = models;
