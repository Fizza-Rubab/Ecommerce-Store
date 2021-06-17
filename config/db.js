const Sequelize = require("sequelize");

const uri = process.env.DB_URI;

module.exports = new Sequelize(uri,{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
