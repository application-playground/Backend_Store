// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class AddressTypeMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   AddressTypeMaster.init({
//     name: DataTypes.STRING,
//     description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'AddressTypeMaster',
//   });
//   return AddressTypeMaster;
// };

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const AddressTypeMaster = sequelize.define('AddressTypeMaster', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    }
  });

  return AddressTypeMaster;
};