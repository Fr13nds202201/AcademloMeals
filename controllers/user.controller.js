const User = require('./../models/users.models');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');


exports.create = catchAsync(async (req, res, next) => {

    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: encryptedPassword,
    });

    const token = await generateJWT(user.id);

    res.status(201).json({
        status: 'SUCCESS',
        message: 'User created successfully',
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    });
});

exports.login = catchAsync(async (req, res, next) => {

    const { email, password } = req.body;

    const user = await User.findOne({
        where: {
            email: email.toLowerCase(),
            status: 'available',
        },
    });

    if (!user) {
        return next(new AppError('the user could not be found', 404));
    }
    // //3 validar si la contraseña es correcta
    if (!(await bcrypt.compare(password, user.password))) {
        return next(new AppError('Incorrect email or password', 404));
    }
    //4 Generar el jsonwebtoken

    const token = await generateJWT(user.id);
    //5 enviar la respueta al cliente

    res.status(200).json({
        status: 'Login success',
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    });
});

exports.updateUser = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await User.findOne({
        id,
        status: 'available',
    });

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'UserID not found',
        });
    }

    await user.update({
        name,
        email,
    });
    console.log(user);
    res.status(200).json({
        status: 'success',
        message: 'The user has been update',
    });
});