const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserService {
  /**
   * Authenticates a user.
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   * @returns {Promise<User|null>} The authenticated user, or null if authentication fails.
   */
  async authenticate(username, password) {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  /**
   * Creates a new user.
   * @param {Object} userData - The data for the new user.
   * @returns {Promise<User>} The created user.
   */
  async createUser(userData) {
    const user = new User(userData);
    user.password = await bcrypt.hash(user.password, 10);
    return await user.save();
  }

  /**
   * Retrieves a user by their ID.
   * @param {string} id - The ID of the user.
   * @returns {Promise<User|null>} The user, or null if not found.
   */
  async getUserById(id) {
    return await User.findById(id);
  }

  // Add more user-related methods as needed...
}

module.exports = new UserService();
