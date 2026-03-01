require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const resumeRoutes = require('./routes/resumes');
const profileRoutes = require('./routes/profile');

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend static files from project root
app.use(express.static(path.join(__dirname, '..')));

// authentication routes (signup, login)
app.use('/api', authRoutes);
// resumes collection (plural and singular endpoints)
app.use('/api/resumes', resumeRoutes);
app.use('/api/resume', resumeRoutes);
// profile retrieval
app.use('/api/profile', profileRoutes);

app.get('/', (req, res) => res.json({ ok: true, message: 'Resume Maker API' }));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/resume-maker';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
