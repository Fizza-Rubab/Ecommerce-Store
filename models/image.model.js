const Sequelize = require("sequelize");
const db = require("../config/db");

const Image = db.define(
  "image",
  {
    imageType: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    imageName: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    imageData: {
      type: Sequelize.BLOB('long'),
      allowNull: false,
    },
  },
  {}
);

// Image.sync({ alter: true }).then(() => console.log("Image table connected"));

Image.associate = (models) => {
  Image.belongsTo(models.Item, {
    foreignKey: "item_id",
  });
};

module.exports = Image;
