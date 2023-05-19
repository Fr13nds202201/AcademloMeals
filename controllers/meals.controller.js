const Meals = require('./../models/meals.models');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');


exports.create = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { name, price } = req.body;

    await Meals.create({
        restaurantid: Number(id),
        name,
        price,
    });

    res.status(201).json({
        status: 'SUCCESS',
        message: 'Meals was created successfully',
        // meals: {

        //     name: meals.name,
        //     price: meals.price,
        //     restaurantid: meals.restaurantid,
        // },
    });
});
exports.findAll = catchAsync(async (req, res, next) => {
    const meals = await Meals.findAll({
        where: {
            status: 'active',
        }
    })

    return res.status(200).json({
        status: 'success',
        meals,
    })
})