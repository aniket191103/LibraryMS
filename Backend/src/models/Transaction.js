const mongoose = require('mongoose');

/**
 * Schema for the Transaction model.
 */
const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  transactionType: {
    type: String,
    enum: ['Checkout', 'Return'],
    required: true,
  },
  transactionDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Transaction model.
 */
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
