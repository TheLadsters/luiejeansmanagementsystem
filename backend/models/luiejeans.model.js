const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    customer_info:{ 
        first_name:{ type: String, required: true},
        last_name:{ type: String, required: true},
        contact_number:{ type: String, required: true},
        address:{ type: String, required: true},    
    },
    deadline:{type: Date,required: true},
    orderCode:{ type: String, required: true},
    deliveryType: { type: String, required: true},
    product_name:{type: String, required: true},
    price: {type: Number, required: true},
    downpayment: {type: Number, required: true},
    sizes_quantity: {
        sizes: {type: String,
            enum: ['14', '16', '18', '20','22','24','26',"XS","S","M","L","XL","XXL","XXXL","XSf","Sf","Mf","Lf","XLf","XXLf","XXXLf"],
            required : true 
        },
        size_quantity:{
            type: Number,
        },
    },
    quantity: {type: Number,
        default: function () {
            return this.size_quantity + quantity
        }
    },
    total: {type: Number,
        default: function () {
            return this.price * quantity
        }
    },
    totalBalance: {type: Number,
        default: function () {
            return this.total * downpayment
        }
    },

}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;