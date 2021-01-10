'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WebMenuPermissionMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      webMenuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrences: {
          references: {
            model: 'WebMenuMasters',
            key: 'id',
            as: 'webMenuId',
          },
        }
      },
      securityGroupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SecurityGroupMasters',
          key: 'id',
          as: 'securityGroupId',
        },
      },
      add: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      view: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      modfiy: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      remove: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      isDeleted: {
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
    await queryInterface.dropTable('WebMenuPermissionMasters');
  }
};