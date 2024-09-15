import axios from 'axios';

// Set up the base URL for API requests
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
});

// Common request configuration or error handling
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error.response?.data || error.message || error);
    return Promise.reject(error);
  }
);

// Fetch all books
export const getBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error; // Re-throw the error for further handling if necessary
  }
};

// Fetch details of a specific book by ID
export const getBookDetails = async (id) => {
  try {
    const response = await api.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book details for ID ${id}:`, error);
    throw error;
  }
};

// Issue a book
export const issueBook = async (data) => {
  try {
    const response = await api.post('/books/issue', data);
    return response.data;
  } catch (error) {
    console.error('Error issuing book:', error);
    throw error;
  }
};

// Return a book
export const returnBook = async (data) => {
  try {
    const response = await api.post('/books/return', data);
    return response.data;
  } catch (error) {
    console.error('Error returning book:', error);
    throw error;
  }
};

// Fetch reports
export const getReports = async () => {
  try {
    const response = await api.get('/reports');
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

// Add a new book
export const addBook = async (data) => {
  try {
    const response = await api.post('/books', data);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

// Update book details
export const updateBook = async (id, data) => {
  try {
    const response = await api.put(`/books/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

// Add a new user
export const addUser = async (data) => {
  try {
    const response = await api.post('/users', data);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

// Update user details
export const updateUser = async (id, data) => {
  try {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Pay a fine
export const payFine = async (fineId, paymentMethod) => {
  try {
    const response = await api.post(`/fines/${fineId}/pay`, { paymentMethod });
    return response.data;
  } catch (error) {
    console.error('Error paying fine:', error);
    throw error;
  }
};

// Fetch all fines
export const getFines = async () => {
  try {
    const response = await api.get('/fines');
    return response.data;
  } catch (error) {
    console.error('Error fetching fines:', error);
    throw error;
  }
};

// Add a new membership
export const addMembership = async (data) => {
  try {
    const response = await api.post('/memberships', data);
    return response.data;
  } catch (error) {
    console.error('Error adding membership:', error);
    throw error;
  }
};

// Update membership details
export const updateMembership = async (id, data) => {
  try {
    const response = await api.put(`/memberships/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating membership:', error);
    throw error;
  }
};

// Fetch all transactions
export const getTransactions = async () => {
  try {
    const response = await api.get('/transactions');
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Fetch book statistics
export const getBookStats = async () => {
  try {
    const response = await api.get('/stats/books');
    return response.data;
  } catch (error) {
    console.error('Error fetching book statistics:', error);
    throw error;
  }
};

/// Fetch user statistics
export const getUserStats = async () => {
  try {
    const response = await api.get('/stats/users'); // Corrected the URL here
    return response.data;
  } catch (error) {
    console.error('Error fetching user statistics:', error);
    throw error;
  }
};

// Update settings
export const updateSettings = async (data) => {
  try {
    const response = await api.put('/settings', data);
    return response.data;
  } catch (error) {
    console.error('Error updating settings:', error);
    throw error;
  }
};
