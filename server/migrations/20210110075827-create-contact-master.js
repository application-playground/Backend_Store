'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContactMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contactTypeId: {
        type: Sequelize.INTEGER,
        // onDelete: 'CASCADE',
        // references: {
        //   model: 'ContactTypeMasters',
        //   key: 'id',
        //   as: 'contactTypeId',
        // },
      },
      countryId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'CountryMasters',
        //   key: 'id',
        //   as: 'countryId',
        // },
      },
      contactNumber: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: current_timestamp
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: current_timestamp
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ContactMasters');
  }
};