const express = require('express');
const router = express.Router();
const mealsController = require('./../controllers/meals.controller');

router
    .post('/:id', mealsController.create);


module.exports = router;