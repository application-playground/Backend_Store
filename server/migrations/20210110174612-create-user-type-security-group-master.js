'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserTypeSecurityGroupMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'UserTypeMasters',
          key: 'id',
          as: 'userTypeId',
        },
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
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserTypeSecurityGroupMasters');
  }
};