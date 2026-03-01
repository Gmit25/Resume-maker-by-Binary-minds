const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const router = express.Router();

// GET /api/profile - return logged-in user's profile (excluding password)
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.sendStatus(404);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// PUT /api/profile - update user profile
router.put('/', auth, async (req, res) => {
  const { name, phone, email, linkedin, github, city, state, password } = req.body;
  try {
    const updateData = { name, phone, email, linkedin, github, city, state };
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    const user = await User.findByIdAndUpdate(req.userId, updateData, { new: true }).select('-password');
    res.json({ message: 'Profile updated successfully', user });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
