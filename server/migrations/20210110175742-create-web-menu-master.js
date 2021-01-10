'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WebMenuMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      header: {
        type: Sequelize.STRING,
        allowNull: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tooltip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      routeURL: {
        type: Sequelize.STRING,
      },
      displayOrder: {
        type: Sequelize.INTEGER
      },
      parentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'WebMenuMasters',
          key: 'id',
          as: 'parentId',
        },
      },
      isNonMenuPage: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    await queryInterface.dropTable('WebMenuMasters');
  }
};