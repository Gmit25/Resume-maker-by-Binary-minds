const express = require('express');
const Resume = require('../models/Resume');
const auth = require('../middleware/auth');

const router = express.Router();

// POST /api/resumes - create a new resume for authenticated user
router.post('/', auth, async (req, res) => {
  try {
    const { title, education, experience, skills } = req.body;
    const resume = new Resume({ userId: req.userId, title, education, experience, skills });
    await resume.save();
    res.json(resume);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// GET /api/resumes - list resumes for authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(resumes);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// GET /api/resumes/:id - get specific resume if it belongs to user
router.get('/:id', auth, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.sendStatus(404);
    if (resume.userId.toString() !== req.userId) return res.sendStatus(403);
    res.json(resume);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// DELETE /api/resumes/:id - delete resume if it belongs to user
router.delete('/:id', auth, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.sendStatus(404);
    if (resume.userId.toString() !== req.userId) return res.sendStatus(403);
    await Resume.findByIdAndDelete(req.params.id);
    res.json({ message: 'Resume deleted successfully' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
