// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class EmailMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   EmailMaster.init({
//     emailAddress: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     emailTypeId: DataTypes.INTEGER,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'EmailMaster',
//   });
//   return EmailMaster;
// };


const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const EmailMaster = sequelize.define('EmailMaster', {
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    emailTypeId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.STRING,
      defaultValue: true
    }
  });

  EmailMaster.associate = (models) => {
    // EMAIL-TYPE-MASTER
    EmailMaster.belongsTo(models.EmailTypeMaster, {
      foreignKey: 'emailTypeId',
      as: 'EmailTypeMaster',
    });
  };

  return EmailMaster
}