const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For hashing passwords

// User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Password hashing before saving to the DB
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10); // Hash password before saving
  next();
});

// Password validation method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // Compare hashed passwords
};

const User = mongoose.model('User', userSchema);

module.exports = User;
