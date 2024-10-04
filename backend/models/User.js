// models/User.js

const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'teacher'], // Role can be either student or teacher
    required: true,
  }
}, { timestamps: true });

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
