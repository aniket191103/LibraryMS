const Transaction = require('../models/Transaction');

/**
 * Service for handling transaction-related operations.
 */
class TransactionService {
  /**
   * Retrieves all transactions.
   * @returns {Promise<Transaction[]>} List of transactions.
   */
  async getAllTransactions() {
    return await Transaction.find();
  }

  /**
   * Retrieves a transaction by its ID.
   * @param {string} id - The ID of the transaction.
   * @returns {Promise<Transaction|null>} The transaction, or null if not found.
   */
  async getTransactionById(id) {
    return await Transaction.findById(id);
  }

  /**
   * Creates a new transaction.
   * @param {Object} transactionData - The data for the new transaction.
   * @returns {Promise<Transaction>} The created transaction.
   */
  async createTransaction(transactionData) {
    const transaction = new Transaction(transactionData);
    return await transaction.save();
  }

  /**
   * Updates an existing transaction.
   * @param {string} id - The ID of the transaction to update.
   * @param {Object} updates - The updates to apply to the transaction.
   * @returns {Promise<Transaction|null>} The updated transaction, or null if not found.
   */
  async updateTransaction(id, updates) {
    return await Transaction.findByIdAndUpdate(id, updates, { new: true });
  }

  /**
   * Deletes a transaction.
   * @param {string} id - The ID of the transaction to delete.
   * @returns {Promise<Transaction|null>} The deleted transaction, or null if not found.
   */
  async deleteTransaction(id) {
    return await Transaction.findByIdAndDelete(id);
  }
}

module.exports = new TransactionService();
