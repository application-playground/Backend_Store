'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ClientMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middleName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contactId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
          model: 'ContactMaster',
          key: 'id',
          as: 'contactId'
        }
      },
      emailId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
          model: 'EmailMaster',
          key: 'id',
          as: 'emailId'
        }
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
          model: 'AddressMaster',
          key: 'id',
          as: 'addressId'
        }
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('ClientMasters');
  }
};