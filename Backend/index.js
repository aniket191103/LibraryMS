const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Connect to the database
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('MONGO_URI environment variable is not set.');
  process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Error connecting to the database:', err));

// Middleware
app.use(express.json()); // Parse JSON bodies

// Configure CORS to allow requests from the frontend URL
const frontendUrl = process.env.FRONTEND_URL;
console.log(frontendUrl);

if (frontendUrl) {
  app.use(cors({ origin: frontendUrl }));
} else {
  console.warn('FRONTEND_URL environment variable is not set. CORS is disabled.');
  app.use(cors()); // Fallback to allowing all origins
}

// Import routes
const userRoutes = require('./src/routes/userRoutes'); // Ensure path is correct
const transactionRoutes = require('./src/routes/transactionRoutes'); // Ensure path is correct
const bookRoutes = require('./src/routes/bookRoutes'); // Ensure path is correct

// Mount the routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/books', bookRoutes);

// Catch-all route for undefined paths (404)
app.use((req, res, next) => {
  res.status(404).json({ message: `Not Found - ${req.originalUrl}` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An internal server error occurred' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
