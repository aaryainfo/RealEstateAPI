const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Property = sequelize.define("properties", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4 // Using Sequelize.UUIDV4 to generate default UUIDs
      },
      property: {
        type: Sequelize.STRING
      },
      propertyType: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      videoLinks: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      carpetArea: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      details: {
        type: Sequelize.STRING
      },
      isHot: {
        type: Sequelize.BOOLEAN
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
    });
  
    return Property;
};
