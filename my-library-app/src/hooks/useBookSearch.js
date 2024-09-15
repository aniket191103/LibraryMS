import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

/**
 * A custom hook that manages the data fetching logic for a book search feature.
 * @param {string} initialQuery - The initial search query.
 * @returns {Object} An object containing the search results, loading state, and search functionality.
 */
const useBookSearch = (initialQuery) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Base URL for the API
  const BASE_URL = 'http://localhost:3001/api/books'; // Hardcoded API URL for book search

  const searchBooks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}?q=${searchQuery}`);
      setBooks(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    searchBooks();
  }, [searchBooks]);

  return {
    books,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    searchBooks,
  };
};

export default useBookSearch;
