const catchAsync = require("../utils/catchAsync");
const Reviews = require('./../models/reviews.models');

exports.create = catchAsync(async (req, res, next) => {
    const { comment, rating } = req.body;
    const { id } = req.params;
    const uid = req.sessionUser.id
    console.log(uid);
    await Reviews.create({
        comment,
        rating,
        restaurantid: Number(id),
        userid: Number(uid),
    });

    return res.status(201).json({
        status: 'success',
    });
});

exports.update = catchAsync(async (req, res, next) => {
    const { review } = req;
    const { comment, rating } = req.body;

    await review.update({ comment, rating });

    return res.status(200).json({
        status: 'success',
    });
});
exports.delete = catchAsync(async (req, res, next) => {
    const { review } = req;
    await review.update({ status: false });

    return res.status(200).json({
        status: 'success',
    });
});