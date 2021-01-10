// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class StateMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   StateMaster.init({
//     name: DataTypes.STRING,
//     countryId: DataTypes.INTEGER,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'StateMaster',
//   });
//   return StateMaster;
// };

export default (sequelize, DataTypes) => {

  const StateMaster = sequelize.define('StateMaster', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });


  StateMaster.associate = (models) => {
    // COUNTRY-MASTER
    StateMaster.belongsTo(models.CountryMaster, {
      foreignKey: 'countryId',
      as: 'CountryMaster',
    });
  };

  return StateMaster;
};