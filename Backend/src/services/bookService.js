const Book = require('../models/Book');

/**
 * Service for handling book-related operations.
 */
class BookService {
  /**
   * Retrieves all books.
   * @returns {Promise<Book[]>} List of books.
   */
  async getAllBooks() {
    return await Book.find();
  }

  /**
   * Retrieves a book by its ID.
   * @param {string} id - The ID of the book.
   * @returns {Promise<Book|null>} The book, or null if not found.
   */
  async getBookById(id) {
    return await Book.findById(id);
  }

  /**
   * Creates a new book.
   * @param {Object} bookData - The data for the new book.
   * @returns {Promise<Book>} The created book.
   */
  async createBook(bookData) {
    const book = new Book(bookData);
    return await book.save();
  }

  /**
   * Updates an existing book.
   * @param {string} id - The ID of the book to update.
   * @param {Object} updates - The updates to apply to the book.
   * @returns {Promise<Book|null>} The updated book, or null if not found.
   */
  async updateBook(id, updates) {
    return await Book.findByIdAndUpdate(id, updates, { new: true });
  }

  /**
   * Deletes a book.
   * @param {string} id - The ID of the book to delete.
   * @returns {Promise<Book|null>} The deleted book, or null if not found.
   */
  async deleteBook(id) {
    return await Book.findByIdAndDelete(id);
  }

  /**
   * Issues a book by updating its availability and assigning it to a user.
   * @param {string} bookId - The ID of the book to issue.
   * @param {string} userId - The ID of the user to whom the book is issued.
   * @returns {Promise<Book|null>} The updated book, or null if not found.
   */
  async issueBook(bookId, userId) {
    // Check if the book exists
    const book = await Book.findById(bookId);
    if (!book) {
      throw new Error('Book not found');
    }

    // Check if the book is already issued
    if (!book.available) {
      throw new Error('Book is already issued');
    }

    // Update the book to mark it as issued
    book.available = false;
    book.issuedTo = userId; // Assuming you have an 'issuedTo' field
    book.updatedAt = Date.now();

    return await book.save();
  }
}

module.exports = new BookService();
