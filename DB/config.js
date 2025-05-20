const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;
const port = process.env.PORT || 3000;

let isConnected;

const connectDB = async () => {
  if (isConnected) return; 

  try {
    const conn = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000, 
    });

    isConnected = conn.connections[0].readyState;
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.log('❌ DB Connection Error:', error.message);
  }
};

module.exports = { connectDB, port };
