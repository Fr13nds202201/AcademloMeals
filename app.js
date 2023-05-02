const express = require("express");
const app = express();
app.use(express.json());
const morgan = require("morgan");
const cors = require('cors');

const userRouter = require('./routes/users.routers');
const restaurantsRouter = require('./routes/restaurants.routers');
const mealsRouter = require('./routes/meals.routers');
const ordersRouter = require('./routes/orders.routers');
//Rutas
app.use(morgan('dev'));
app.use('/api/v1/users', userRouter);
app.use('/api/v1/restaurants', restaurantsRouter);
app.use('/api/v1/meals', mealsRouter);
app.use('/api/v1/orders', ordersRouter);

//Rutas equivocadas manda error 
app.all('*', (req, res, next) => {
    const err = new Error(`Cant find ${req.originalUrl} on this server BAD URL`);
    err.status = 'error';
    err.statusCode = 404;

    next(err);
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'fail';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// app.use(globalErrorHandler);
module.exports = app;