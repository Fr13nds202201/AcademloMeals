const express = require('express');
const router = express.Router();
const mealsController = require('./../controllers/meals.controller');

// router
//     .get('/',);

router
    // .route('/:id')
    .post('/:id', mealsController.create);
// .get()
// .patch()
// .delete();


module.exports = router;