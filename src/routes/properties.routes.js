const express = require('express');

const PropertyController = require('../controllers/PropertyController');

const propertiesRoutes = express.Router();
/**
 * @swagger
 *  definitions:
 *     PropertyPostRequest:
 *       type: object
 *       required: 
 *         - type
 *         - value
 *         - footage
 *         - postal_code
 *         - address
 *         - neighborhood
 *         - city
 *         - state
 *       properties:
 *         type:
 *           type: string
 *           description: Type of the property.   
 *         value:
 *           type: number
 *           description: Value of the property.   
 *         footage:
 *           type: integer
 *           description: Footage of the property.   
 *         bedrooms:
 *           type: integer
 *           description: Number of bedrooms of the property.   
 *         bathrooms:
 *           type: integer
 *           description: Number of bathrooms of the property.   
 *         parking_spaces:
 *           type: integer
 *           description: Number of parking_spaces of the property.   
 *         postal_code:
 *           type: string
 *           description: Postal Code.   
 *         address:
 *           type: string
 *           description: Address of the property.   
 *         neighborhood:
 *           type: string
 *           description: Neighborhood of the property.   
 *         place_number:
 *           type: integer
 *           description: Place number of the property.   
 *         apartment_number:
 *           type: integer
 *           description: Apartment number of the property.   
 *         city:
 *           type: string
 *           description: City of the property.   
 *         state:
 *           type: string
 *           description: State of the property.   
 */

/**
 * @swagger
 *  definitions:
 *     PropertyPutRequest:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           description: Type of the property.   
 *         value:
 *           type: number
 *           description: Value of the property.   
 *         footage:
 *           type: integer
 *           description: Footage of the property.   
 *         bedrooms:
 *           type: integer
 *           description: Number of bedrooms of the property.   
 *         bathrooms:
 *           type: integer
 *           description: Number of bathrooms of the property.   
 *         parking_spaces:
 *           type: integer
 *           description: Number of parking_spaces of the property.   
 *         postal_code:
 *           type: string
 *           description: Postal Code.   
 *         address:
 *           type: string
 *           description: Address of the property.   
 *         neighborhood:
 *           type: string
 *           description: Neighborhood of the property.   
 *         place_number:
 *           type: integer
 *           description: Place number of the property.   
 *         apartment_number:
 *           type: integer
 *           description: Apartment number of the property.   
 *         city:
 *           type: string
 *           description: City of the property.   
 *         state:
 *           type: string
 *           description: State of the property.   
 */

/**
 * @swagger
 * /properties:
 *   post:
 *     tags:
 *       - Properties
 *     description: Adds a new property to the database
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: property
 *         description: Property object
 *         in: body
 *         required: true
 *         schema:
 *          $ref: '#/definitions/PropertyPostRequest'
 *     responses:
 *       200:
 *         description: Successfully added
 *       500:
 *         description: Server error
 */
propertiesRoutes.post('/', PropertyController.store);

/**
 * @swagger
 * /properties/{id}:
 *   put:
 *     tags:
 *       - Properties
 *     description: Updates a single property
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Property Object ID
 *         in: path
 *         required: true
 *       - name: property
 *         description: Property Object
 *         in: body
 *         required: true
 *         schema:
 *          $ref: '#/definitions/PropertyPutRequest'
 *     responses:
 *       200:
 *         description: Successfully updated
 *       500:
 *         description: Server error
 */
propertiesRoutes.put('/:id', PropertyController.updateProperty);

/**
 * @swagger
 * /properties/{id}:
 *   delete:
 *     tags:
 *       - Properties
 *     description: Deletes a single fruit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Property Object ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */
propertiesRoutes.delete('/:id', PropertyController.deleteProperty);

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     tags:
 *       - Properties
 *     description: Returns a single property
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular Property Object's ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A property
 *       500:
 *         description: Server Error
 */
propertiesRoutes.get('/:id', PropertyController.searchProperty);

propertiesRoutes.get('/filter', (req, res) => {
  return res.json({ ok: true });
});

module.exports = propertiesRoutes;
