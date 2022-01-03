const router = require('express').Router();
let Product = require('../models/luiejeans.model');

router.route('/').get((req, res) => {
    Product.find()
    .then(luiejeans=>res.json(luiejeans))
    .catch(err=>res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const customer_info = req.body.customer_info;
    const deadline = Date.parse(req.body.deadline);
    const orderCode = req.body.orderCode;
    const deliveryType = req.body.deliveryType;
    const productName = req.body.productName;
    const price = Number(req.body.price);
    const downpayment = Number(req.body.downpayment);
    const sizes_quantity = req.body.sizes_quantity;
    const quantity = Number(req.body.quantity);
    const total = Number(req.body.total);
    const totalBalance = Number(req.body.totalBalance);

    const newProduct = new Product({
        customer_info,
        deadline,
        orderCode,
        deliveryType,
        productName,
        price,   
        downpayment,
        sizes_quantity,
        quantity,
        total,
        totalBalance,
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
        product.customer_info = req.body.customer_info;
        product.deadline = Date.parse(req.body.deadline);
        product.orderCode = req.body.orderCode;
        product.deliveryType = req.body.deadline;
        product.price = Number(req.body.price);
        product.downpayment = Number(req.body.downpayment);
        product.sizes_quantity = req.body.sizes_quantity;
        product.quantity = Number(req.body.quantity);
        product.total = Number(req.body.total);
        product.totalBalance = Number(req.body.totalBalance);

        product.save()
        .then( () => res.json('Product Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;