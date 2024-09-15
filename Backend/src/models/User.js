const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing

/**
 * Schema for the User model.
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email validation
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  isActive: {
    type: Boolean,
    default: true, // Default to active when a user is created
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

/**
 * Hash the password before saving the user.
 */
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

/**
 * Compare provided password with stored hashed password.
 * @param {string} candidatePassword - The password to compare.
 * @returns {boolean} - Whether the password matches.
 */
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

/**
 * User model.
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
