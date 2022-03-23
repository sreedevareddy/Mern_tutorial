const asyncHandler = require('express-async-handler');
// @desc get GOALS
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message : `Get Goals`})
});

// @desc set GOALS
// @route POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    console.log(req.body);
    res.status(200).json({ message : `Set Goals`});
});

// @desc update GOALS
//@route PUT /api/goals
//@access private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message : `Update Goal ${req.params.id}`});
});

// @desc delete GOALS
//@route DELETE /api/goals
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message : `Delete Goal ${req.params.id}`});
});


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}