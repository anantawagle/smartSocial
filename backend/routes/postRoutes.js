const express = require("express");
const { generatePost } = require("../controllers/postController");

const router = express.Router();

// Define a POST route to generate social media posts
router.post("/generate", generatePost);

module.exports = router;
