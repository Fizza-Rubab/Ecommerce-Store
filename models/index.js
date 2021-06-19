const db = require("../config/db");

const models = {
  User: db.import("./user.model"),
  Item: db.import("./item.model"),
  Category: db.import("./category.model"),
  Address: db.import("./address.model"),
  Image: db.import("./image.model"),
  Order: db.import("./order.model"),
  Order_Item: db.import("./order_item.model"),
  Payment: db.import("./payment.model"),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = db;

module.exports = models;
