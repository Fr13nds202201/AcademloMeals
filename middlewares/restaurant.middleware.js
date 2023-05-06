const catchAsync = require('../utils/catchAsync');
const Restaurant = require('../models/restaurants.models');
const AppError = require('../utils/appError');

exports.existRestaurant = catchAsync(async (req, res, next) => {
    const { id, restaurantid } = req.params;
    const restaurant = await Restaurant.findOne({
        where: {
            status: 'active',
            id: restaurantid || id,
        },
    });
    if (!restaurant) return next(new AppError(`Restaurant with id: ${id} not found`, 404));
    req.restaurant = restaurant;
    next();
});