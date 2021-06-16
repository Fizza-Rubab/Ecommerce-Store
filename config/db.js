const Sequelize = require("sequelize");

const uri = process.env.DB_URI;

module.exports = new Sequelize(uri);
