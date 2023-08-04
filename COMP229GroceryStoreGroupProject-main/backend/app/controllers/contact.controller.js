const db = require("../models");
const Contacts = db.contacts;


exports.create = (req, res) => {
    if (!req.body.message ||!req.body.first_name ||!req.body.last_name ) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const contact = new Contacts({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact_number: req.body.contact_number,
        email_address: req.body.email_address,
        message: req.body.message   });

    Contacts
        .create(contact)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Contact."
            });
        });
};


exports.findAll = (req, res) => {
    const first_name = req.query.first_name;
    const last_name = req.query.last_name;

    const condition = {};

    if (first_name) {
        condition.first_name = { $regex: new RegExp(first_name), $options: "i" };
    }

    if (last_name) {
        condition.last_name = { $regex: new RegExp(last_name), $options: "i" };
    }

    Contacts.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving contacts."
            });
        });
};

exports.getAll = (req, res) => {
    const id = req.params.id;

    Contacts.find()
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Contacts with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Product with id=" + id });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Contacts.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Contacts with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Product with id=" + id });
        });
};


exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;

    Contacts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Contact with id=${id}. Maybe Contacts was not found!`
                });
            }
            else res.send({ message: "Contact was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Contact with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Contacts.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
                });
            }
            else {
                res.send({
                    message: "Contact was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Contact with id=" + id
            });
        });
};


exports.deleteAll = (req, res) => {
    Contacts.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Contacts were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all contacts."
            });
        });
};