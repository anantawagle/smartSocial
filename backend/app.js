const express = require("express");
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRoutes");

const cors = require('cors');
app.use(cors());

const protect = require('./middleware/protect');
const express = require('express');
const app = express();

app.use(express.json());

// Example protected route
app.get('/api/dashboard', protect, (req, res) => {
  res.status(200).json({ success: true, message: 'Welcome to the dashboard!' });
});


dotenv.config();  // Load environment variables from .env file


// Middleware to parse JSON requests
app.use(express.json());

// Use postRoutes for handling post generation requests
app.use("/api/posts", postRoutes);

// Default route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the SmartSocial Backend!");
});

module.exports = app;

