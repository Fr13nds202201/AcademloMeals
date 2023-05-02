const express = require('express');
const router = express.Router();
const ordersController = require('./../controllers/orders.controller');

router
    .post('/:id', ordersController.create);


module.exports = router;