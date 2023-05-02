const express = require('express');
const router = express.Router();
const restaurantController = require('./../controllers/restauran.controller');

router
    .post('/', restaurantController.create);


module.exports = router;