
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

  const Blog = sequelize.define("blogs", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4 // Using Sequelize.UUIDV4 to generate default UUIDs
    },
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      defaultValue: [],
    },
    mostPopular: {
      type: Sequelize.INTEGER
    },
    isActive: {
      type: Sequelize.BOOLEAN
    },
  });

  return Blog;
};