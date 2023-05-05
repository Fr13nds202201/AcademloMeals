const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');

const User = require('../models/users.models');

exports.protect = catchAsync(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startswith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(
            new AppError('You are not logged in! Please log in to get access', 401)
        );
    }

    //3. decodificar el jwt
    const decoded = await promisify(jwt.verify)(
        token,
        process.env.SECRET_JWT_SEED
    );

    //4. buscar el usuario y validar si existe
    const user = await User.findOne({
        where: {
            id: decoded.id,
            status: 'active',
        },
    });

    if (!user) {
        return next(
            new AppError('The owner of this token it not longer available', 401)
        );
    }
})