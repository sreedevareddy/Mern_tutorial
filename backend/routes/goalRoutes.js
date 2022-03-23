const express = require('express');
const { getgid } = require('process');
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController');

// router.get('/', getGoals);

// router.post('/', setGoals);

// router.put('/:id', updateGoals);

// router.delete('/:id', deleteGoals);

// new way
router.route('/').get(getGoals).post(setGoals);
router.route('/:id').delete(deleteGoals).put(updateGoals);

module.exports = router;