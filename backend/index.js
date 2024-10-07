const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");

dotenv.config(); // Ensure that dotenv is configured to use environment variables
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors()); // Use CORS for all routes

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Edtech');
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log("Error connecting to DB:", err);
  }
}

// Call the main function to connect to MongoDB
main();

// Routes
app.use("/api/auth", authRoutes); // Use your auth routes
app.get("/", (req, res) => {
  res.send("I am Groot");
});

// Start the server
app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}`);
});
