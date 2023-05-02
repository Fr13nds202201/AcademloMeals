const Restaurants = require('./../models/restaurants.models');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');


exports.create = catchAsync(async (req, res, next) => {

    const { name, address, rating } = req.body;

    const restaurants = await Restaurants.create({
        name,
        address,
        rating
    });


    res.status(201).json({
        status: 'SUCCESS',
        message: 'Restaurant created successfully',
        restaurants: {
            id: restaurants.id,
            name: restaurants.name,
            address: restaurants.rating,
        },
    });
});
