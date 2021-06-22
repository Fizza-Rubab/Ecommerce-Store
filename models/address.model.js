module.exports = (Sequelize, db) => {
  const Address = db.define(
    "address",
    {
      default: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      receiverName: Sequelize.STRING(32),
      streetAddress: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      zip: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    },
    {}
  );

  Address.associate = (models) => {
    Address.belongsTo(models.User, {
      foreignKey: "user_id",
    });
  };

  return Address;
};
