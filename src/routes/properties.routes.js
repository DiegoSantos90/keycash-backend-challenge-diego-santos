const express = require('express');
const PropertyController = require('../controllers/PropertyController');

const propertiesRoutes = express.Router();

propertiesRoutes.post('/', PropertyController.store);

propertiesRoutes.put('/:id', PropertyController.updateProperty);

propertiesRoutes.delete('/:id', PropertyController.deleteProperty);

propertiesRoutes.get('/:id', PropertyController.searchProperty);

propertiesRoutes.get('/filter', (req, res) => {
  return res.json({ ok: true });
});

module.exports = propertiesRoutes;
