const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Orders = db.define('orders', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    mealid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("active", "cancelled", "completed"),
        defaultValue: 'active'
    }

});

module.exports = Orders;
