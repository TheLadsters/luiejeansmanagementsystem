const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema = new Schema({
    customerFirstName:{ type: String, required: true},
    customerLastName:{ type: String, required: true},
    numberOfOrders:{ type: Number},
    contactNumber: {type: String, required: true},
    customerAddress:{type:String},
    productName: {type: String},
    orderDate: {type: Date},
    price: {type: Number},
    orderCode: {type: String},
    productSize: {type:String},
    deliveryType: {type: String},
    productPic: {type: String},
    downPayment: {type: Number}

}, {
    timestamps: true,
});

const Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;