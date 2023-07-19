module.exports = app => {

    const images = require("../controllers/img.controller.js");
  
   
  
    var router = require("express").Router();
  
   
  
    // Create a new Product
  
    router.post("/", images.create);
  
   
  
    // Retrieve all Products
  
    router.get("/", images.findAll);
  
   
  
    // Retrieve all published Products
  
    router.get("/published", images.findAllPublished);
  
   
  
    // Retrieve a single Product with id
  
    router.get("/:id", images.findOne);
  
   
  
    // Update a Product with id
  
    router.put("/:id", images.update);
  
   
  
    // Delete a Product with id
  
    router.delete("/:id", images.delete);
  
   
  
    // Delete all Products
  
    router.delete("/", images.deleteAll);
  
   
  
    app.use('/api/images', router);
  
  };
  
   