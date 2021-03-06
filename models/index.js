const Sequelize = require("sequelize");
const db = require("../config/db");

db.authenticate()
  .then(() => {
    console.log(
      "Connection with postgresql has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const models = {
  User: require("./user.model")(Sequelize, db),
  Item: require("./item.model")(Sequelize, db),
  Category: require("./category.model")(Sequelize, db),
  Address: require("./address.model")(Sequelize, db),
  Image: require("./image.model")(Sequelize, db),
  Order: require("./order.model")(Sequelize, db),
  Order_Item: require("./order_item.model")(Sequelize, db),
  Payment: require("./payment.model")(Sequelize, db),
  Profile: require("./profile.model")(Sequelize, db),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
  models[modelName]
    .sync()
    .then(() => console.log(`${modelName} table connected`));
});

models.sequelize = db;
models.Sequelize = Sequelize;

module.exports = models;
