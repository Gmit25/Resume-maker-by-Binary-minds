const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');

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

module.exports = router;
