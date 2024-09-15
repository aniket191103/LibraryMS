import React, { useState } from 'react';
import axios from 'axios';

const ReturnBook = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleReturnBook = async () => {
    try {
      await axios.post('/api/books/return', { bookId });
      setMessage('Book returned successfully!');
    } catch (error) {
      setMessage('Error returning the book. Please try again.');
    }
  };

  return (
    <div>
      <h2>Return a Book</h2>
      <label htmlFor="bookId">Book ID:</label>
      <input
        type="text"
        id="bookId"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={handleReturnBook}>Return Book</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ReturnBook;
