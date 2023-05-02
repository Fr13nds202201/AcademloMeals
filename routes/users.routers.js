const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user.controller');

router
    .post('/login', userController.login);

router
    .post('/signup', userController.create);

router
    .patch('/:id', userController.updateUser);

module.exports = router;