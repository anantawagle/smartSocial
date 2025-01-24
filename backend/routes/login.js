const express = require("express");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken"); // For generating JWT tokens
const User = require("../models/user"); // Import the User model
const router = express.Router();

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Log the incoming request data (email and password)
    console.log("Received login request with email:", email);
    console.log("Received login request with password:", password);

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    
    // Log the retrieved user from the database (if exists)
    console.log("Retrieved user from DB:", user);

    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    // Log the hashed password stored in the database
    console.log("Stored hashed password in DB:", user.password);

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    
    // Log the result of password comparison
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Send success response with token
    res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred. Please try again." });
  }
});

module.exports = router;
