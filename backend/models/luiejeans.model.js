const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    deadline:{type: Date, required: true},
    customerName:{ type: String, required: true},
    orderCode:{ type: String, required: true},
    quantity:{ type: Number, required: true},
    price: {type: Number, required: true},
    downpayment: { type: Number, required: true},
    deliveryType: { type: String, required: true},
    totalBalance: { type: Number, required: true}

}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;