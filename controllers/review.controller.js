const catchAsync = require("../utils/catchAsync")

exports.create = catchAsync(async (req, res, next) => {
    const { comment, rating } = req.body;
    const { id } = req.params;
    const uid = req.sessionUser.id

    await Reviews.create({ comment, rating, restaurantId: id, userId: uid });

    return res.status(200).json({
        status: 'success',
    })
})

exports.update = catchAsync(async (req, res, next) => {

})
exports.delete = catchAsync(async (req, res, next) => {

})