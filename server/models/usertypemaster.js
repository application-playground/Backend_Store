// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class userTypeMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   userTypeMaster.init({
//     typeName: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'userTypeMaster',
//   });
//   return userTypeMaster;
// };

export default (sequelize, DataTypes) => {

  const UserTypeMaster = sequelize.define('UserTypeMaster', {
    typeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  
  return UserTypeMaster;
}