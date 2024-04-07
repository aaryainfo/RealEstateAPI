const db = require("../models");
// const config = require("../config/auth.config");
const uuid = require('uuid');
const Enquiry = db.enquiry;
const sequelize = db.sequelize;

  // My controllers

  // Create Enquiry
  exports.createEnquiry = async (req, res) => {
    // Save product to Database
    try {

      // Sync the model with the database, force option set to true
      await sequelize.sync({ alter: false });

      const enquiry = await Enquiry.create({
        id: uuid.v4(),
        fullName:  req.body.fullName ?? '',
        email: req.body.email ?? '',
        contact: req.body.contact ?? '',
        message: req.body.message ?? '',
      });

      res.send({ message: "Enquiry created successfully!", data: {...enquiry.dataValues} });
  
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  // Get enquiry list
  exports.getEnquiryList = async (req, res) => {
      // Save enquiry to Database
      try {
        const enquiry = await Enquiry.findAll();
  
        res.send({ message: "Enquiry List get successfully!", data: [...enquiry] });
  
      } catch (error) {
        res.status(500).send({ message: error.message, data: [] });
      }
    
    };
  
  // Delete enquiry 
  exports.deleteEnquiry = async (req, res) => {
    // Save enquiry to Database
    try {
      // Check for not found
      const enquiryFind = await Enquiry.findOne({ where: { id: req.body.id } });
      if (enquiryFind === null) {
        res.send({ message: "Enquiry Not Found", code: "NotFound" });
        return;
      } 
      const enquiry = await Enquiry.destroy({ where: { id: req.body.id } })

      res.send({ message: "Enquiry deleted successfully!", data: {...enquiry} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };

  // Update enquiry 
  exports.updateEnquiry = async (req, res) => {
    // Save enquiry to Database
    try {
      // Check for not found
      const enquiryFind = await Enquiry.findOne({ where: { id: req.body.id } });
      if (enquiryFind === null) {
        res.send({ message: "Enquiry Not Found", code: "NotFound" });
        return;
      } 
      const enquiry = await Enquiry.update({ 
        fullName:  req.body.fullName ?? '',
        email: req.body.email ?? '',
        contact: req.body.contact ?? '',
        message: req.body.message ?? '', }, { where: { id: req.body.id } })

      res.send({ message: "Enquiry updated successfully!", data: {...enquiry} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };

  // Get enquiry with id
  exports.getEnquiryWithId = async (req, res) => {
    console.log("req.body.id: ", req.body)
      // Save blog to Database
      try {
        const enquiry = await Enquiry.findOne({ where: { id: req.body.id } });
  
        res.send({ message: "Enquiry get successfully!", data: enquiry });
  
      } catch (error) {
        res.status(500).send({ message: error.message, data: [] });
      }
    
    };