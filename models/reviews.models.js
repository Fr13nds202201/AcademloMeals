const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Reviews = db.define('reviews', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    restaurantid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // status: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false,
    //     defaultValue: true,
    // },

});

module.exports = Reviews;
