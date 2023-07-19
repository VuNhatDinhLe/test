const db = require("../models");

const Images = db.images;

 

// Create and Save a new Product

exports.create = (req, res) => {

  // Validate request

  if (!req.body.name) {

    res.status(400).send({ message: "Content can not be empty!" });

    return;

  }

}

 

 
 

// Retrieve all Products from the database.

exports.findAll = (req, res) => {

   const name = req.query.name;

  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

 

  Images.find(condition)

    .then(data => {

      res.send(data);

    })

    .catch(err => {

      res.status(500).send({

        message:

          err.message || "Some error occurred while retrieving products."

      });

    });

 

};

 

