const express = require("express");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken"); // For generating JWT tokens
const validator = require("validator"); // For email validation
const User = require("../models/user"); // Import the User model
const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Email validation using validator library
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Simplified password hashing (faster with saltRounds = 5)
    const saltRounds = 5;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new user with hashed password
    const newUser = new User({
      username,
      email,
      password: hashedPassword, // Store hashed password
    });

    // Save user to the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send success response with token
    res.status(201).json({
      message: "Signup successful!",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "An error occurred. Please try again." });
  }
});

module.exports = router;
