const db = require("../models");
// const config = require("../config/auth.config");
const uuid = require('uuid');
const Property = db.property;
const sequelize = db.sequelize;

  // My controllers

  // Create Property
  exports.createProperty = async (req, res) => {
    // Save product to Database
    try {

      // Sync the model with the database, force option set to true
      await sequelize.sync({ alter: false });

      const property = await Property.create({
        id: uuid.v4(),
        property:  req.body.property ?? '',
        propertyType: req.body.propertyType ?? '',
        name: req.body.name ?? '',
        price: req.body.price ?? null,
        unit: req.body.unit ?? '',
        location: req.body.location ?? '',
        address: req.body.address ?? '',
        videoLinks: req.body.videoLinks ?? [],
        carpetArea: req.body.carpetArea ?? '',
        images: req.body.images ?? [],
        details: req.body.details ?? '',
        isActive: req.body.isActive ?? true,
      });

      res.send({ message: "Property created successfully!", data: {...property.dataValues} });
  
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  // Get property list
  exports.getPropertyList = async (req, res) => {
      // Save product to Database
      try {
        const property = await Property.findAll();
  
        res.send({ message: "Property List get successfully!", data: [...property] });
  
      } catch (error) {
        res.status(500).send({ message: error.message, data: [] });
      }
    
    };
  
  // Delete property 
  exports.deleteProperty = async (req, res) => {
    // Save product to Database
    try {
      // Check for not found
      const propertyFind = await Property.findOne({ where: { id: req.body.id } });
      if (propertyFind === null) {
        res.send({ message: "Property Not Found", code: "NotFound" });
        return;
      } 
      const property = await Property.destroy({ where: { id: req.body.id } })

      res.send({ message: "Property deleted successfully!", data: {...property} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };

  // Update property 
  exports.updateProperty = async (req, res) => {
    // Save product to Database
    try {
      // Check for not found
      const propertyFind = await Property.findOne({ where: { id: req.body.id } });
      if (propertyFind === null) {
        res.send({ message: "Property Not Found", code: "NotFound" });
        return;
      }
      const property = await Property.update({ 
        property:  req.body.property ?? '',
        propertyType: req.body.propertyType ?? '',
        name: req.body.name ?? '',
        price: req.body.price ?? null,
        unit: req.body.unit ?? '',
        location: req.body.location ?? '',
        address: req.body.address ?? '',
        videoLinks: req.body.videoLinks ?? [],
        carpetArea: req.body.carpetArea ?? '',
        images: req.body.images ?? [],
        details: req.body.details ?? '',
        isActive: req.body.isActive ?? true, }, { where: { id: req.body.id } })

      res.send({ message: "Property updated successfully!", data: {...property} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };