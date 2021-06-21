module.exports = (Sequelize, db) => {
  const Profile = db.define(
    "profile",
    {
      firstName: Sequelize.STRING(20),
      lastName: Sequelize.STRING(20),
      phoneNo: Sequelize.STRING(20),
      imageType: Sequelize.STRING(10),
      imageName: Sequelize.STRING(64),
      imageData: Sequelize.BLOB("long"),
    },
    {}
  );

  Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
      foreignKey: "user_id",
    });
  };

  return Profile;
};
