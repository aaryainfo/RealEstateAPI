const db = require("../models");
// const config = require("../config/auth.config");
const uuid = require('uuid');
const Blog = db.blog;
const sequelize = db.sequelize;

  // My controllers

  const getB64Data = (dataArray) => {
    console.log("dataArray: ",dataArray)
    return dataArray.forEach((data) => {
      console.log("data: ", data)
        return Buffer.from(data).toString('base64');
    })
  }

  // Create Blog
  exports.createBlog = async (req, res) => {
    console.log("req.body: ", req.body)
    // Save product to Database
    try {

      // Sync the model with the database, force option set to true
      await sequelize.sync({ alter: false });
      // console.log("getB64Data(req.body.images): ", getB64Data(req.body.images))

      const blog = await Blog.create({
        id: uuid.v4(),
        title:  req.body.title ?? '',
        content: req.body.content ?? '',
        // images: req.body.images ?? [],
        mostPopular: req.body.mostPopular ?? 0,
        isActive: req.body.isActive ?? 0,
      });

      res.send({ message: "Blog created successfully!", data: {...blog.dataValues} });
  
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  // Get blog list
  exports.getBlogList = async (req, res) => {
      // Save blog to Database
      try {
        const blog = await Blog.findAll();
  
        res.send({ message: "Blog List get successfully!", data: [...blog] });
  
      } catch (error) {
        res.status(500).send({ message: error.message, data: [] });
      }
    
    };
  
  // Delete blog 
  exports.deleteBlog = async (req, res) => {
    // Save blog to Database
    try {
      // Check for not found
      const blogFind = await Blog.findOne({ where: { id: req.body.id } });
      if (blogFind === null) {
        res.send({ message: "Blog Not Found", code: "NotFound" });
        return;
      } 
      const blog = await Blog.destroy({ where: { id: req.body.id } })

      res.send({ message: "Blog deleted successfully!", data: {...blog} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };

  // Update blog 
  exports.updateBlog = async (req, res) => {
    // Save blog to Database
    try {
      // Check for not found
      const blogFind = await Blog.findOne({ where: { id: req.body.id } });
      if (blogFind === null) {
        res.send({ message: "Blog Not Found", code: "NotFound" });
        return;
      } 
      const blog = await Blog.update({ 
        title:  req.body.title ?? '',
        content: req.body.content ?? '',
        // images: req.body.images ?? [],
        mostPopular: req.body.mostPopular ?? 0,
        isActive: req.body.isActive ?? true, }, { where: { id: req.body.id } })

      res.send({ message: "Blog updated successfully!", data: {...blog} });

    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };

  // Get blog with id
  exports.getBlogWithId = async (req, res) => {
    console.log("req.body.id: ", req.body)
      // Save blog to Database
      try {
        const blog = await Blog.findOne({where: {"id": req.body.id}});
  
        res.send({ message: "Blog get successfully!", data: blog });
  
      } catch (error) {
        res.status(500).send({ message: error.message, data: [] });
      }
    
    };