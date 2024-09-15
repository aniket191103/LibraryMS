const express = require('express');
const bookController = require('../controllers/bookController.js');

const router = express.Router();

/**
 * Book-related routes.
 */
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

/**
 * Route to issue a book to a user.
 * @route POST /api/books/issue/:bookId
 * @param {string} bookId - The ID of the book to issue.
 * @param {Object} req.body - Contains userId to whom the book is being issued.
 * @returns {Object} - The issued book details.
 */
router.post('/issue/:bookId', bookController.issueBook);
router.get('/issued', bookController.getIssuedBooks);
module.exports = router;
