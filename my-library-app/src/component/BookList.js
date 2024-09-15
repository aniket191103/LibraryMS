import React, { useState, useEffect } from 'react';
import useBookSearch from '../hooks/useBookSearch.js';


const BookList = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, searchBooks } = useBookSearch();

  useEffect(() => {
    searchBooks();
  }, [searchBooks]);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <input
              type="radio"
              name="selectedBook"
              checked={selectedBook === book}
              onChange={() => handleBookSelect(book)}
            />
          </li>
        ))}
      </ul>
      {selectedBook && (
        <div>
          <h3>Selected Book</h3>
          <p>Title: {selectedBook.title}</p>
          <p>Author: {selectedBook.author}</p>
          {/* Additional book details */}
        </div>
      )}
    </div>
  );
};

export default BookList;
