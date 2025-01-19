const express = require('express');
const authRoutes = require('./authRoutes');
const gptRoutes = require('./gptRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/gpt', gptRoutes);

module.exports = router;
