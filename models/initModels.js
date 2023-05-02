const Restaurant = require('./../models/restaurants.models');
const Meals = require('./../models/meals.models');
const Orders = require('./../models/orders.models');
const Reviews = require('./../models/reviews.models');
const Users = require('./../models/users.models');

const initModel = () => {
    //Restaurants->meals
    Restaurant.hasMany(Meals);
    Meals.belongsTo(Restaurant);
    //Restaurants->Reviews
    Restaurant.hasMany(Reviews);
    Reviews.belongsTo(Restaurant);
    //Meals->Orders
    Meals.belongsTo(Orders);
    Orders.belongsTo(Meals);
    //Users->Orders
    Users.hasMany(Orders);
    Orders.belongsTo(Users);
    //User->Reviews
    Users.hasMany(Reviews);
    Reviews.belongsTo(Users);
}

module.exports = initModel;