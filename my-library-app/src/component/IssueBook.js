import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ISSUE_BOOK_API_URL = 'http://localhost:3001/api/books/issue'; // Hardcoded API URL for issuing books

const IssueBook = () => {
  const [bookName, setBookName] = useState('');
  const [issueDate, setIssueDate] = useState(new Date().toISOString().slice(0, 10));
  const [returnDate, setReturnDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(ISSUE_BOOK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookName,
          issueDate,
          returnDate,
          remarks,
        }),
      });
      navigate('/transactions'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Error issuing book:', error);
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Book Name:
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </label>
        <label>
          Issue Date:
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            required
          />
        </label>
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </label>
        <label>
          Remarks:
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </label>
        <button type="submit">Issue Book</button>
      </form>
    </div>
  );
};

export default IssueBook;
