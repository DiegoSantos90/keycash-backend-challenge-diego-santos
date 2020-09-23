'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('properties', { 
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.DataTypes.UUIDV4,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        value: {
          type: Sequelize.DECIMAL(10,2),
          allowNull: false,
        },
        footage: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        bedrooms: {
          type: Sequelize.INTEGER,
        },
        bathrooms: {
          type: Sequelize.INTEGER,
        },
        parking_spaces: {
          type: Sequelize.INTEGER,
        },
        postal_code: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },     
        neighborhood: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        place_number: {
          type: Sequelize.INTEGER,
        },
        apartment_number: {
          type: Sequelize.INTEGER,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },        
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('properties');
  }
};

/*
Tabela Properties
  - id: UUID
  - tipo: Casa | Apartamento
  - valor: Decimal
  - metragem: Number
  - numeroDeQuartos: Decimal
  - numeroSuites
  - numeroBanheiros
  - numeroDeVagas: Number
  - CEP
  - Logradouro
  - numeroLog
  - numeroAp
  - Bairro
  - Cidade
  - UF
  - createdAt
  - updatedAt
*/

