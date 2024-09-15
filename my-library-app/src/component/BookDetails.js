import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../utils/api';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const data = await getBookDetails(id);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Available: {book.available ? 'Yes' : 'No'}</p>
      {/* Add more book details as needed */}
    </div>
  );
};

export default BookDetails;
