const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// User-related routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Add this route for user statistics
router.get('/stats/users', userController.getUserStats);

module.exports = router;
