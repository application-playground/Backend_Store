// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class WebMenuMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   WebMenuMaster.init({
//     name: DataTypes.STRING,
//     header: DataTypes.STRING,
//     title: DataTypes.STRING,
//     tooltip: DataTypes.STRING,
//     routeURL: DataTypes.STRING,
//     displayOrder: DataTypes.INTEGER,
//     parentId: DataTypes.INTEGER,
//     isNonMenuPage: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'WebMenuMaster',
//   });
//   return WebMenuMaster;
// };

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const WebMenuMaster = sequelize.define('WebMenuMaster', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    header: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tooltip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    routeURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parentId: {
      type: DataTypes.INTEGER,
    },
    isNonMenuPage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  });

  WebMenuMaster.associate = (models) => {
    // // WEB-MENU-MASTER
    // WebMenuMaster.belongsTo(models.WebMenuMaster, {
    //   // foreignKey: 'id',
    //   // key: 'WebMenuMaster'
    //   // targetKey: 'name'
    // });
  };

  return WebMenuMaster;
};