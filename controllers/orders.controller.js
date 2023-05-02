const Orders = require('./../models/orders.models');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');


exports.create = catchAsync(async (req, res, next) => {
    const { restaurantId } = req.params;
    const { quantity, mealid } = req.body;

    const Orders = await Orders.create({
        restaurantId,
        quantity,
        mealid,
    });


    res.status(201).json({
        status: 'SUCCESS',
        message: 'Restaurant created successfully',
        Orders,
    });
});
