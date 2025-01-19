const express = require('express');
const { generatePost } = require('../controllers/gptController');

const router = express.Router();

router.post('/generate-post', generatePost);

module.exports = router;
