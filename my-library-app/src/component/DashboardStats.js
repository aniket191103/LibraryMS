import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BOOKS_API_URL = 'http://localhost:3001/api/books'; // Hardcoded API URL for books
const USERS_API_URL = 'http://localhost:3001/api/users'; // Hardcoded API URL for users

const DashboardStats = () => {
  const [bookStats, setBookStats] = useState({
    totalBooks: 0,
    availableBooks: 0,
    issuedBooks: 0,
  });
  const [userStats, setUserStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    suspendedUsers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch book and user data
        const [bookResponse, userResponse] = await Promise.all([
          axios.get(BOOKS_API_URL),
          axios.get(USERS_API_URL),
        ]);

        // Book data processing
        const bookData = bookResponse.data;
        const totalBooks = bookData.length; // Total count of books
        const availableBooks = bookData.filter(book => book.available === true).length; // Count of available books
        const issuedBooks = bookData.filter(book => book.available === false).length; // Count of issued books

        // User data processing
        const userData = userResponse.data;
        const totalUsers = userData.length;
        const activeUsers = userData.filter(user => user.isActive === true).length; // Count of active users
        const suspendedUsers = userData.filter(user => user.isActive === false).length; // Count of suspended users

        // Update state with fetched data
        setBookStats({
          totalBooks,
          availableBooks,
          issuedBooks,
        });
        setUserStats({
          totalUsers,
          activeUsers,
          suspendedUsers,
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h2>Dashboard Stats</h2>
      <div>
        <h3>Book Stats</h3>
        <p>Total Books: {bookStats.totalBooks}</p>
        <p>Available Books: {bookStats.availableBooks}</p>
        <p>Issued Books: {bookStats.issuedBooks}</p>
      </div>
      <div>
        <h3>User Stats</h3>
        <p>Total Users: {userStats.totalUsers}</p>
        <p>Active Users: {userStats.activeUsers}</p>
        <p>Suspended Users: {userStats.suspendedUsers}</p>
      </div>
    </div>
  );
};

export default DashboardStats;
