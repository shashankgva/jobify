import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';

// Routes
import jobRouter from './router/jobRouter.js'; // Import the jobRouter
import authRouter from './router/authRouter.js'; // Import the authRouter
import userRouter from './router/userRouter.js'; // Import the userRouter

// Public
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Middleware
import errorHandler from './middlewares/errorHandler.js';
import { authenticateUser } from './middlewares/authMiddleware.js';

dotenv.config();

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());
app.use(express.json());

app.get('/api/v1/test', (req, res) => {
  res.status(200).json({ message: 'Hello from Express!' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Data received', data: req.body });
});

// Use the authRouter for auth-related routes
app.use('/api/v1/auth', authRouter);

// Use the jobRouter for job-related routes
app.use('/api/v1/jobs', authenticateUser, jobRouter);

app.use('/api/v1/users', authenticateUser, userRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

// Create not found middleware
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Create error handling middleware
app.use(errorHandler);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
