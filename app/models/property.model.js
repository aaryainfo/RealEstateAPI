
// const { v4: uuidv4 } = require('uuid');
// const { DataTypes, UUIDV4 } = require('sequelize');

// module.exports = (sequelize, Sequelize) => {
//     const Property = sequelize.define("properties", {
//       id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         allowNull: true,
//         defaultValue: UUIDV4,
//         type: Sequelize.STRING(36)
//       },
//       propertyType: {
//         type: Sequelize.STRING
//       },
//       name: {
//         type: Sequelize.STRING
//       },
//       price: {
//         type: Sequelize.STRING
//       }
//     });
  
//     return Property;
//   };

const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Property = sequelize.define("properties", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4 // Using Sequelize.UUIDV4 to generate default UUIDs
      },
      propertyType: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      }
    });
  
    return Property;
};