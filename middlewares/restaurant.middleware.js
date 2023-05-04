const catchAsync = require('../utils/catchAsync');
const Restaurant = require('../models/restaurants.models');
const AppError = require('../utils/appError');

exports.existRestaurant = catchAsync(async (req, res, next) => {
    const { id } = req;
    const restaurant = await Restaurant.findOne({
        where: {
            status: true,
            id,
        },
    });
    if (!restaurant) return next(new AppError(`restaurant with id: ${id} not found`, 404));
    req.restaurant = restaurant;
    next();
});