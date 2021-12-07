const router = require('express').Router();
let Product = require('../models/luiejeans.model');

router.route('/').get((req, res) => {
    Product.find()
    .then(luiejeans=>res.json(luiejeans))
    .catch(err=>res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const deadline = Date.parse(req.body.deadline);
    const customerName = req.body.customerName;
    const orderCode = req.body.orderCode;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);
    const downpayment = Number(req.body.downpayment);
    const deliveryType = req.body.deadline;
    const totalBalance = Number(req.body.totalBalance);

    const newProduct = new Product({
        deadline,
        customerName,
        orderCode,
        quantity,
        price,
        downpayment,
        deliveryType,
        totalBalance
    });

    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        product.deadline = Date.parse(req.body.deadline);
        product.customerName = req.body.customerName;
        product.orderCode = req.body.orderCode;
        product.quantity = Number(req.body.quantity);
        product.price = Number(req.body.price);
        product.downpayment = Number(req.body.downpayment);
        product.deliveryType = req.body.deadline;
        product.totalBalance = Number(req.body.totalBalance);

        product.save()
        .then( () => res.json('Product Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;