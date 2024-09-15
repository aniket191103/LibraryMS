import React, { useState } from 'react';
import { addBook, updateBook } from '../utils/api';

const BookManagement = () => {
  const [isBook, setIsBook] = useState(true);
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookAvailable, setBookAvailable] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isBook) {
        await addBook({
          title: bookTitle,
          author: bookAuthor,
          description: bookDescription,
          available: bookAvailable,
        });
      } else {
        await updateBook({
          title: bookTitle,
          author: bookAuthor,
          description: bookDescription,
          available: bookAvailable,
        });
      }
      // Reset form fields
      setBookTitle('');
      setBookAuthor('');
      setBookDescription('');
      setBookAvailable(true);
    } catch (error) {
      console.error('Error managing book:', error);
    }
  };

  return (
    <div>
      <h2>Book Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            checked={isBook}
            onChange={() => setIsBook(true)}
          />
          Book
        </label>
        <label>
          <input
            type="radio"
            checked={!isBook}
            onChange={() => setIsBook(false)}
          />
          Movie
        </label>
        <label>
          Title:
          <input
            type="text"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Available:
          <input
            type="checkbox"
            checked={bookAvailable}
            onChange={(e) => setBookAvailable(e.target.checked)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BookManagement;
