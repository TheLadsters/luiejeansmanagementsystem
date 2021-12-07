const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema = new Schema({
    customerFirstName:{ type: String, required: true},
    customerLastName:{ type: String, required: true},
    numberOfOrders:{ type: Number, required: true},
    contactNumber: {type: String, required: true}

}, {
    timestamps: true,
});

const Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;