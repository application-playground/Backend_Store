// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class UserTypeSecurityGroupMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   UserTypeSecurityGroupMaster.init({
//     userTypeId: DataTypes.INTEGER,
//     securityGroupId: DataTypes.INTEGER,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'UserTypeSecurityGroupMaster',
//   });
//   return UserTypeSecurityGroupMaster;
// };

export default (sequelize, DataTypes) => {
  const UserTypeSecurityGroupMaster = sequelize.define('UserTypeSecurityGroupMaster', {
    userTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    securityGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: true
    }
  });

  UserTypeSecurityGroupMaster.associate = (models) => {
    // USER-TYPE-MASTER
    UserTypeSecurityGroupMaster.belongsTo(models.UserTypeMaster, {
      foreignKey: 'id',
      key: 'UserTypeMaster'
    });
    // SECURITY-GROUP-MASTER
    UserTypeSecurityGroupMaster.belongsTo(models.SecurityGroupMaster, {
      foreignKey: 'id',
      key: 'SecurityGroupMaster'
    });

  }

  return UserTypeSecurityGroupMaster;
};