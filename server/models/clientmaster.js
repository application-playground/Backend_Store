// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class ClientMaster extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   ClientMaster.init({
//     firstName: DataTypes.STRING,
//     middleName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     website: DataTypes.STRING,
//     contactId: DataTypes.INTEGER,
//     emailId: DataTypes.INTEGER,
//     addressId: DataTypes.INTEGER,
//     isActive: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'ClientMaster',
//   });
//   return ClientMaster;
// };

export default (sequelize, DataTypes) => {
  const ClientMaster = sequelize.define('ClientMaster', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contactId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'ContactMaster',
      //   key: 'id',
      //   as: 'contactId',
      // },
    },
    emailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'EmailMaster',
      //   key: 'id',
      //   as: 'emailId',
      // },
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'AddressMaster',
      //   key: 'id',
      //   as: 'addressId',
      // },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });

  ClientMaster.associate = (models) => {
    //CONTACT-MASTER
    ClientMaster.belongsTo(models.ContactMaster, {
      foreignKey: 'contactId',
      as: 'ContactMaster'
    });
    //EMAIL-MASTER
    ClientMaster.belongsTo(models.EmailMaster, {
      foreignKey: 'emailId',
      as: 'EmailMaster'
    });
    //ADDRESS-MASTER
    ClientMaster.belongsTo(models.AddressMaster, {
      foreignKey: 'addressId',
      as: 'AddressMaster'
    });
  };

  return ClientMaster;
};