const db = require("../models");
// const config = require("../config/auth.config");
const uuid = require('uuid');
const Customer = db.customer;
const sequelize = db.sequelize;

  // My controllers

  // Create Customer
  exports.createCustomer = async (req, res) => {
    // Save product to Database
    try {

      // Sync the model with the database, force option set to true
      await sequelize.sync({ alter: false });

      const customer = await Customer.create({
        id: uuid.v4(),
        fullName:  req.body.fullName ?? '',
        email: req.body.email ?? '',
        contact: req.body.contact ?? '',
        message: req.body.message ?? '',
      });

      res.send({ message: "Customer created successfully!", data: {...customer.dataValues} });
  
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  // Get customer list
  exports.getCustomerList = async (req, res) => {
      // Save customer to Database
      try {
        const customer = await Customer.findAll();
  
        res.send({ message: "Customer List get successfully!", data: [...customer] });
  
      } catch (error) {
        res.status(500).send({ message: error.message, data: [] });
      }
    
    };
  
  // Delete customer 
  exports.deleteCustomer = async (req, res) => {
    // Save customer to Database
    try {
      // Check for not found
      const customerFind = await Customer.findOne({ where: { id: req.body.id } });
      if (customerFind === null) {
        res.send({ message: "Customer Not Found", code: "NotFound" });
        return;
      } 
      const customer = await Customer.destroy({ where: { id: req.body.id } })

      res.send({ message: "Customer deleted successfully!", data: {...customer} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };

  // Update customer 
  exports.updateCustomer = async (req, res) => {
    // Save customer to Database
    try {
      // Check for not found
      const customerFind = await Customer.findOne({ where: { id: req.body.id } });
      if (customerFind === null) {
        res.send({ message: "Customer Not Found", code: "NotFound" });
        return;
      } 
      const customer = await Customer.update({ 
        fullName:  req.body.fullName ?? '',
        email: req.body.email ?? '',
        contact: req.body.contact ?? '',
        message: req.body.message ?? '', }, { where: { id: req.body.id } })

      res.send({ message: "Customer updated successfully!", data: {...customer} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };