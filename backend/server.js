const express = require("express");
const cors = require("cors"); // Import CORS
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user"); // Assuming you have this route for user signup
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow CORS for all origins (you can also restrict it to specific origins)
app.use(cors({
  origin: "http://localhost:5173", // Change this if you deploy your frontend elsewhere
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow cookies if needed
}));

app.use(express.json());

// MongoDB connection setup (example)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.use("/api", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
