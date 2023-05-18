const catchAsync = require('../utils/catchAsync');
const Restaurant = require('../models/restaurants.models');
const AppError = require('../utils/appError');

exports.existRestaurant = catchAsync(async (req, res, next) => {
    const { restaurantId, id } = req.params;

    const restaurant = await Restaurant.findOne({
        where: {
            // status: 'active',
            id: restaurantId || id,
        },
    });

    if (!restaurant)
        return next(new AppError(`Restaurant with id: ${restaurantId || id} not found`, 404));
    req.restaurant = restaurant;
    next();
});