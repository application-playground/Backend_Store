// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class AddressMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   AddressMaster.init({
//     addressLine1: DataTypes.STRING,
//     addressLine2: DataTypes.STRING,
//     addressLine3: DataTypes.STRING,
//     pincode: DataTypes.STRING,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'AddressMaster',
//   });
//   return AddressMaster;
// };

// 'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  const AddressMaster = sequelize.define('AddressMaster', {
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressLine2: {
      type: DataTypes.STRING,
    },
    addressLine3: {
      type: DataTypes.STRING,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.STRING,
      defaultValue: true
    }
  });

  AddressMaster.associate = (models) => {
    // ADDRESS-TYPE-MASTER
    AddressMaster.belongsTo(models.AddressTypeMaster, {
      foreignKey: 'AddressTypeId',
      as: 'AddressTypeMaster',
    });
  };


  return AddressMaster;
}