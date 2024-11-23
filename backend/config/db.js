const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('EAuction', 'root', 'Manoj@123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
