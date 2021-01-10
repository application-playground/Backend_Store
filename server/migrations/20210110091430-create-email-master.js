module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmailMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emailAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
      },
      emailTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EmailTypeMasters',
          key: 'id',
          as: 'emailTypeId',
        },
      },
      isActive: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('EmailMasters');
  }
};