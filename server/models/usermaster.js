// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class UserMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   UserMaster.init({
//     userName: DataTypes.STRING,
//     userEmail: DataTypes.STRING,
//     userPassword: DataTypes.STRING,
//     isTempPassword: DataTypes.BOOLEAN,
//     clientId: DataTypes.INTEGER,
//     userTypeId: DataTypes.INTEGER,
//     isActive: DataTypes.BOOLEAN,
//     isDeleted: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'UserMaster',
//   });
//   return UserMaster;
// };
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const UserMaster = sequelize.define('UserMaster', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isTempPassword: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    isDeleted: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    }
  });

  UserMaster.associate = (models) => {
    // CLIENT-MASTER
    UserMaster.belongsTo(models.ClientMaster, {
      foreignKey: 'id',
      as: 'ClientMaster',
    });
    // USER-TYPE-MASTER
    UserMaster.belongsTo(models.UserTypeMaster, {
      foreignKey: 'id',
      as: 'UserTypeMaster',
    });
    
  };  

  return UserMaster
};