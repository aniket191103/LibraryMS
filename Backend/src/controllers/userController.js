const User = require('../models/User.js'); // Ensure the path to the model is correct

/**
 * Get all users.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred while fetching users' });
  }
};

/**
 * Get a user by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ message: 'An error occurred while fetching the user' });
  }
};

/**
 * Create a new user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const createUser = async (req, res) => {
  try {
    const { name, email, password, isActive } = req.body;
    // Validate incoming data
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }
    // Create new user
    const newUser = new User({ name, email, password, isActive });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'An error occurred while creating the user', error: error.message });
  }
};

/**
 * Update a user by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const updateUser = async (req, res) => {
  try {
    const { name, email, isActive } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, isActive }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'An error occurred while updating the user' });
  }
};

/**
 * Delete a user by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'An error occurred while deleting the user' });
  }
};

/**
 * Get user statistics.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({});
    const activeUsers = await User.countDocuments({ isActive: true });
    const suspendedUsers = await User.countDocuments({ isActive: false });

    res.json({
      totalUsers,
      activeUsers,
      suspendedUsers,
    });
  } catch (error) {
    console.error('Error fetching user stats:', error);
    res.status(500).json({ message: 'An error occurred while fetching user statistics' });
  }
};

// Export all controller functions
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserStats,
};
