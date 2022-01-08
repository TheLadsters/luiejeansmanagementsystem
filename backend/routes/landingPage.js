const router = require('express').Router();
let Customer = require('../models/customers.model');

router.route('/').get((req, res) => {
    Customer.find()
    .then(customers=>res.json(customers))
    .catch(err=>res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const customerFirstName = req.body.customerFirstName;
    const customerLastName = req.body.customerLastName;
    const numberOfOrders = req.body.numberOfOrders;
    const contactNumber = req.body.contactNumber;
    const customerAddress = req.body.customerAddress;
    const productName = req.body.productName;
    const orderDate = req.body.orderDate;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const orderCode = req.body.orderCode;
    const productSize = req.body.productSize;
    const deliveryType = req.body.deliveryType;
    const productPic = req.body.productPic;
    const downPayment = req.body.downPayment;
    const status = req.body.status; 

    const newCustomers = new Customer({
        customerFirstName,
        customerLastName,
        numberOfOrders,
        contactNumber,
        customerAddress,
        productName,
        orderDate,
        price,
        quantity,
        orderCode,
        productSize,
        deliveryType,
        productPic,
        downPayment,
        status
    });

    newCustomers.save()
    .then(() => res.json('Customer added!'))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').get((req, res) => {
    Customer.findById(req.params.id)
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Customer Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Customer.findById(req.params.id)
    .then(customer => {
        customer.customerFirstName = req.body.customerFirstName;
        customer.customerLastName = req.body.customerLastName;
        customer.numberOfOrders = req.body.numberOfOrders;
        customer.contactNumber = req.body.contactNumber;
        customer.customerAddress = req.body.customerAddress;
        customer.productName = req.body.productName;
        customer.orderDate = req.body.orderDate;
        customer.price = req.body.price;
        customer.quantity = req.body.quantity;
        customer.orderCode = req.body.orderCode;
        customer.productSize = req.body.productSize;
        customer.deliveryType = req.body.deliveryType;
        customer.productPic = req.body.productPic;
        customer.downPayment = req.body.downPayment;
        customer.status = req.body.status; 

        customer.save()
        .then( () => res.json('Product Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;