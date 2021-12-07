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
    const numberOfOrders = Number(req.body.numberOfOrders);
    const contactNumber = req.body.contactNumber;

    const newCustomers = new Customer({
        customerFirstName,
        customerLastName,
        numberOfOrders,
        contactNumber,
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
        customer.numberOfOrders = Number(req.body.numberOfOrders);
        customer.contactNumber = req.body.contactNumber;

        Customer.save()
        .then( () => res.json('Product Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;