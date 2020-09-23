const express = require('express');
const propertiesRoutes = require('./properties.routes');

const routes = express.Router();

routes.use('/properties', propertiesRoutes);

module.exports = routes;

