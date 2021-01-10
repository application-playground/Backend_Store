// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class WebMenuPermissionMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   WebMenuPermissionMaster.init({
//     webMenuId: DataTypes.INTEGER,
//     securityGroupId: DataTypes.INTEGER,
//     add: DataTypes.BOOLEAN,
//     view: DataTypes.BOOLEAN,
//     modfiy: DataTypes.BOOLEAN,
//     remove: DataTypes.BOOLEAN,
//     isDeleted: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'WebMenuPermissionMaster',
//   });
//   return WebMenuPermissionMaster;
// };

export default (sequelize, DataTypes) => {
  const WebMenuPermissionMaster = sequelize.define('WebMenuPermissionMaster', {
    webMenuId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    securityGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    add: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    view: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    modfiy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    remove: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  WebMenuPermissionMaster.associate = (models) => {
    // WEB-MENU-MASTER
    WebMenuPermissionMaster.belongsTo(models.WebMenuMaster, {
      foreignKey: 'id',
      key: 'WebMenuMaster'
    });
    // SECURITY-GROUP-MASTER
    WebMenuPermissionMaster.belongsTo(models.SecurityGroupMaster, {
      foreignKey: 'id',
      key: 'SecurityGroupMaster'
    });
  }

  return WebMenuPermissionMaster;
};