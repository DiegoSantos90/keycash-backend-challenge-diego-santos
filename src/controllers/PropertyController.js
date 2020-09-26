const Property = require('../models/Property');

const validator = require('validator');

module.exports = {

  async filterProperty(req, res) {
    try {
      const escpQuery = Object.assign({}, ...Object.keys(req.query).map(obKey => {
        return {[obKey]: validator.escape(req.query[obKey])}
      }));
  
      const properties  = await Property.findAll({
        where: escpQuery
     });
  
      return res.json(properties);
    } catch (err) {
      res.status(500).json({'error':"Server error"});
    }

  },

  async updateProperty(req, res) {
    try {
      const { id } = req.params;

      await Property.update(req.body, {
        where: {
          id,
        }
      });
  
      const updateProperty = await Property.findByPk(id);
  
      return res.json(updateProperty);
  
    } catch (err) {
      res.status(500).json({'error':"Server error"});
    }
  },

  async deleteProperty(req, res) {
    try {
      const { id } = req.params;

      await Property.destroy({
        where: {
          id,
        }
      });
  
      return res.status(204).send();      
    } catch (err) {
      res.status(500).json({'error':"Server error"});
    }
  },

  async searchProperty(req, res) {
    try {
      const { id } = req.params;
      const properties = await Property.findByPk(id);
  
      return res.json(properties);        
    } catch (err) {
      res.status(500).json({'error':"Server error"});
    }
  },

  async store( req, res ) {
    try {
      const { 
        type,
        value,
        footage,
        bedrooms,
        bathrooms,
        parking_spaces,
        postal_code,
        address,
        neighborhood,
        place_number,
        apartment_number,
        city,
        state,
      } = req.body;
  
      const property = await Property.create({
        type,
        value,
        footage,
        bedrooms,
        bathrooms,
        parking_spaces,
        postal_code,
        address,
        neighborhood,
        place_number,
        apartment_number,
        city,
        state,
      });
  
      return res.json(property);
        
    } catch (err) {
      res.status(500).json({'error':"Server error"});
    }
  }
}