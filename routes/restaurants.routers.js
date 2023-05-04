const express = require('express');
const router = express.Router();

const restaurantController = require('./../controllers/restauran.controller');
const restaurantMiddleware = require('./../middlewares/restaurant.middleware');

router
    .route('/')
    .get(restaurantController.findAll)
    .post(restaurantController.create);

router
    .use('/:id', restaurantMiddleware.existRestaurant)
    .route('/:id')
    .get(restaurantController.findOne)
    .patch(restaurantController.update)
    .delete(restaurantController.delete);

module.exports = router;