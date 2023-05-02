const Meals = require('./../models/meals.models');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');


exports.create = catchAsync(async (req, res, next) => {

    const { name, price } = req.body;

    const Meals = await Meals.create({
        name,
        price,
    });

    res.status(201).json({
        status: 'SUCCESS',
        message: 'Restaurant created successfully',
        Meals: {
            id: Meals.id,
            name: Meals.name,
            price: Meals.price,
        },
    });
});
