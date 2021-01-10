'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AddressMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      addressLine1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressLine2: {
        type: Sequelize.STRING
      },
      addressLine3: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.STRING
      },
      addressTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'AddressTypeMasters',
          key: 'id',
          as: 'addressTypeId',
        },
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AddressMasters');
  }
};