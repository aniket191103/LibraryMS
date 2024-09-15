const bookService = require('../services/bookService');

/**
 * Controller for book-related endpoints.
 */
const bookController = {
  /**
   * Get all books.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  getAllBooks: async (req, res) => {
    try {
      const books = await bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      console.error('Error getting books:', error);
      res.status(500).json({ message: 'Error getting books', error: error.message });
    }
  },

  /**
   * Get a book by ID.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(book);
    } catch (error) {
      console.error('Error getting book:', error);
      res.status(500).json({ message: 'Error getting book', error: error.message });
    }
  },

  /**
   * Create a new book.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  createBook: async (req, res) => {
    try {
      // Destructure the book details from the request body
      const { title, author, description, available } = req.body;

      // Validate that required fields are present
      if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
      }

      // Optional: Validate data types and formats if necessary
      if (typeof title !== 'string' || typeof author !== 'string') {
        return res.status(400).json({ message: 'Title and author must be strings' });
      }

      // Create a new book entry using the bookService
      const newBook = await bookService.createBook({ title, author, description, available });

      // Return the newly created book with a 201 status
      res.status(201).json(newBook);
    } catch (error) {
      // Log the error and return a 500 status with the error message
      console.error('Error creating book:', error);
      res.status(500).json({ message: 'Error creating book', error: error.message });
    }
  },

  /**
   * Update a book.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, author, description, available } = req.body;
      const updatedBook = await bookService.updateBook(id, { title, author, description, available });
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(updatedBook);
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ message: 'Error updating book', error: error.message });
    }
  },

  /**
   * Delete a book.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBook = await bookService.deleteBook(id);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ message: 'Error deleting book', error: error.message });
    }
  },

  /**
   * Issue a book to a user.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  issueBook: async (req, res) => {
    try {
      const { bookId } = req.params;
      const { userId } = req.body; // Assuming user ID is passed in the request body

      // Validate that userId is provided
      if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
      }

      // Issue the book using the bookService
      const issuedBook = await bookService.issueBook(bookId, userId);
      res.status(200).json(issuedBook);
    } catch (error) {
      console.error('Error issuing book:', error);
      res.status(500).json({ message: 'Error issuing book', error: error.message });
    }
  },

  /**
   * Get all issued books.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  getIssuedBooks: async (req, res) => {
    try {
      const issuedBooks = await bookService.getIssuedBooks();
      res.status(200).json(issuedBooks);
    } catch (error) {
      console.error('Error getting issued books:', error);
      res.status(500).json({ message: 'Error getting issued books', error: error.message });
    }
  },
};

module.exports = bookController;
