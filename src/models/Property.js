const { Model, DataTypes } = require('sequelize');

class Property extends Model {
  static init(sequelize) {
    super.init({
      type: DataTypes.STRING,
      value: DataTypes.DECIMAL(10,2),
      footage: DataTypes.INTEGER,
      bedrooms: DataTypes.INTEGER,
      bathrooms: DataTypes.INTEGER,
      parking_spaces: DataTypes.INTEGER,
      postal_code: DataTypes.STRING,
      address: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      place_number:  DataTypes.INTEGER,
      apartment_number: DataTypes.INTEGER,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Property;