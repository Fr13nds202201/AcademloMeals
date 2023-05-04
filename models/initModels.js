const Restaurant = require('./../models/restaurants.models');
const Meals = require('./../models/meals.models');
const Orders = require('./../models/orders.models');
const Reviews = require('./../models/reviews.models');
const Users = require('./../models/users.models');

const initModel = () => {
    Users.hasMany(Orders);
    Orders.belongsTo(Users);

    Users.hasMany(Reviews);
    Reviews.belongsTo(Users);

    Restaurant.hasMany(Meals);
    Meals.belongsTo(Restaurant);

    Meals.hasOne(Orders);
    Orders.belongsTo(Meals);
}

module.exports = initModel;