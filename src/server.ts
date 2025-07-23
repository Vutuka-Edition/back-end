import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app';

dotenv.config();

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI as string;

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });