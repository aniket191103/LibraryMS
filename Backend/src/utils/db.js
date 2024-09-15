const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

async function connectToDatabase() {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI environment variable is not set.');
    }

    await mongoose.connect(mongoUri);  // Removed deprecated options
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
};
