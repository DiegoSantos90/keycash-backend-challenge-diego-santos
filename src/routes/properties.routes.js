const express = require('express');

const propertiesRoutes = express.Router();

propertiesRoutes.post('/', async (req, res) => {
  return res.json({ ok: true });
});

propertiesRoutes.put('/', async (req, res) => {
  return res.json({ ok: true });
});

propertiesRoutes.delete('/', async (req, res) => {
  return res.json({ ok: true });
});

propertiesRoutes.get('/', async (req, res) => {
  return res.json({ ok: true });
});

module.exports = propertiesRoutes;
