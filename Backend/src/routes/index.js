const express = require('express');
const userRoutes = require('./userRoutes'); // Ensure path is correct

const router = express.Router();

// Use user routes
router.use('/users', userRoutes);

module.exports = router;
