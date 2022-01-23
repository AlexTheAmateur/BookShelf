const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize('bookshelf_db', "root", "102206Jeremiah!",  {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});


module.exports = sequelize;