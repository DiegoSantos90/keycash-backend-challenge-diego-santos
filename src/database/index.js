const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Property = require('../models/Property');

const connection = new Sequelize(dbConfig);

Property.init(connection);

module.exports = connection;