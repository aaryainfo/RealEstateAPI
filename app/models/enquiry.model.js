
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

  const Enquiry = sequelize.define("enquiries", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4 // Using Sequelize.UUIDV4 to generate default UUIDs
    },
    fullName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.STRING
    }
  });

  return Enquiry;
};
