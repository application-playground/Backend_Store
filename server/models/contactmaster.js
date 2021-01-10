// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class ContactMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   ContactMaster.init({
//     contactTypeId: DataTypes.INTEGER,
//     countryId: DataTypes.INTEGER,
//     contactNumber: DataTypes.INTEGER,
//     description: DataTypes.TEXT,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'ContactMaster',
//   });
//   return ContactMaster;
// };

export default (sequelize, DataTypes) =>{
  const ContactMaster = sequelize.define('ContactMaster', {
    contactTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contactNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  ContactMaster.associate = (models) => {
    // COUNTRY-TYPE-MASTER
    ContactMaster.belongsTo(models.ContactTypeMaster, {
      foreignKey: 'contactTypeId',
      as: 'ContactTypeMaster',
    });

    // COUNTRY-MASTER
    ContactMaster.belongsTo(models.CountryMaster, {
      foreignKey: 'countryId',
      as: 'CountryMaster',
    });
  };

  return ContactMaster
}