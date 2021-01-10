// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class SecurityGroupMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   SecurityGroupMaster.init({
//     securityGroupName: DataTypes.STRING,
//     description: DataTypes.STRING,
//     isSystemGroup: DataTypes.BOOLEAN,
//     isDefault: DataTypes.BOOLEAN,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'SecurityGroupMaster',
//   });
//   return SecurityGroupMaster;
// };

export default (sequelize, DataTypes) => {
  const SecurityGroupMaster = sequelize.define('SecurityGroupMaster', {
    securityGroupName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    isSystemGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  return SecurityGroupMaster;
};