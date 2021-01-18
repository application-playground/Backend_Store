// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class EmailTypeMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   EmailTypeMaster.init({
//     name: DataTypes.STRING,
//     description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'EmailTypeMaster',
//   });
//   return EmailTypeMaster;
// };

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const EmailTypeMaster = sequelize.define('EmailTypeMaster', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    }
  });

  return EmailTypeMaster;
};