const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route with validation
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
    body("role").isIn(["student", "teacher"]).withMessage("Role must be student or teacher"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, role } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Check the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Validate user role
      if (user.role !== role) {
        return res.status(403).json({ message: "Access denied. Invalid role." });
      }

      // Successful login
      res.status(200).json({
        message: "Login successful",
        user: { id: user._id, username: user.username, role: user.role },
      });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = router;
