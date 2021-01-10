// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class CountryMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   CountryMaster.init({
//     shortName: DataTypes.STRING,
//     name: DataTypes.STRING,
//     countryCode: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'CountryMaster',
//   });
//   return CountryMaster;
// };

export default (sequelize, DataTypes) => {
  const CountryMaster = sequelize.define('CountryMaster', {
    shortName: {
      type: DataTypes.string,
      allowNull: false,
    },
    name: {
      type: DataTypes.string,
      allowNull: false,
    },
    countryCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return CountryMaster;
};