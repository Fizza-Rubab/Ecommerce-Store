module.exports = (Sequelize, db) => {
  const Category = db.define(
    "category",
    {
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
    },
    {}
  );

  // Category.sync({ alter: true }).then(() => console.log("Category table connected"));

  return Category;
};
