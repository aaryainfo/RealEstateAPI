const db = require("../models");
// const config = require("../config/auth.config");
const uuid = require('uuid');
const Webuser = db.webuser;
const sequelize = db.sequelize;

  // My controllers

  // Create Webuser
  exports.createWebuser = async (req, res) => {
    // Save product to Database
    try {

      // Sync the model with the database, force option set to true
      await sequelize.sync({ alter: false });

      const webuser = await Webuser.create({
        id: uuid.v4(),
        fullName:  req.body.fullName ?? '',
        email: req.body.email ?? '',
        password: req.body.password ?? '',
        address: req.body.address ?? '',
      });

      res.send({ message: "Webuser created successfully!", data: {...webuser.dataValues} });
  
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  // Get webuser list
  exports.getWebuserList = async (req, res) => {
      // Save webuser to Database
      try {
        const webuser = await Webuser.findAll();
  
        res.send({ message: "Webuser List get successfully!", data: [...webuser] });
  
      } catch (error) {
        res.status(500).send({ message: error.message, data: [] });
      }
    
    };
  
  // Delete webuser 
  exports.deleteWebuser = async (req, res) => {
    // Save webuser to Database
    try {
      // Check for not found
      const webuserFind = await Webuser.findOne({ where: { id: req.body.id } });
      if (webuserFind === null) {
        res.send({ message: "Webuser Not Found", code: "NotFound" });
        return;
      } 
      const webuser = await Webuser.destroy({ where: { id: req.body.id } })

      res.send({ message: "Webuser deleted successfully!", data: {...webuser} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };

  // Update webuser 
  exports.updateWebuser = async (req, res) => {
    // Save webuser to Database
    try {
      // Check for not found
      const webuserFind = await Webuser.findOne({ where: { id: req.body.id } });
      if (webuserFind === null) {
        res.send({ message: "Webuser Not Found", code: "NotFound" });
        return;
      } 
      const webuser = await Webuser.update({ 
        fullName:  req.body.fullName ?? '',
        email: req.body.email ?? '',
        password: req.body.password ?? '',
        address: req.body.address ?? '', }, { where: { id: req.body.id } })

      res.send({ message: "Webuser updated successfully!", data: {...webuser} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };

  // Get webuser with id
  exports.getWebuserWithId = async (req, res) => {
    console.log("req.body.id: ", req.body)
      // Save blog to Database
      try {
        const webuser = await Webuser.findOne({ where: { id: req.body.id } });
  
        res.send({ message: "Webuser get successfully!", data: webuser });
  
      } catch (error) {
        res.status(500).send({ message: error.message, data: [] });
      }
    
    };