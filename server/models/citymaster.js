// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class CityMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   CityMaster.init({
//     name: DataTypes.STRING,
//     stateId: DataTypes.INTEGER,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'CityMaster',
//   });
//   return CityMaster;
// };

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const CityMaster = sequelize.define('CityMaster', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });


  CityMaster.associate = (models) => {
    // STATE-MASTER
    CityMaster.belongsTo(models.StateMaster, {
      foreignKey: 'stateId',
      as: 'StateMaster',
    });
  };

  return CityMaster;
};