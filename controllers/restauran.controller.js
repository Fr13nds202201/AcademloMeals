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

exports.findAll = catchAsync(async (req, res, next) => {
    const restaurants = await Restaurants.findAll({
        where: {
            status: 'active',
        }
    })

    return res.status(200).json({
        status: 'successs',
        results: restaurants.length,
        restaurants,
    });
});

exports.findOne = catchAsync(async (req, res, next) => {
    const { restaurant } = req;

    return res.status(200).json({
        restaurant,
    });
});

exports.update = catchAsync(async (req, res, next) => {
    const { restaurant } = req;
    const { name, address } = req;

    await restaurant.update({ name, address });

    return res.status(200).json({
        status: 'success',
        message: 'the Restaurant has been update!!',
    });
});

exports.delete = catchAsync(async (req, res, next) => {
    const { restaurants } = req;

    await Restaurants.update({ status: false });

    return res.status(200).json({
        status: 'success',
    });
});