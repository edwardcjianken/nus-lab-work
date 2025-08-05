const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import database methods
const {
  User,
  findAllUsers,
  findUsersByCriteria,
  updateOneUser,
  deleteManyUsers,
  createUser,
  findUserById,
  findUserByEmail,
  updateUserById,
  deleteUserById,
} = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Initialize with express()
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    console.log("🔍 Attempting to connect to MongoDB...");
    console.log("📍 Connection URI:", process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Failed:`);
    console.error(`   Error: ${error.message}`);
    console.error(`   Code: ${error.code}`);
    console.log("\n💡 Solutions:");
    console.log("   1. Install MongoDB locally");
    console.log("   2. Use MongoDB Atlas (cloud)");
    console.log("   3. Check if MongoDB service is running");
    console.log("   4. Verify your connection string");
    process.exit(1);
  }
};

// Route using express
app.get("/", (req, res) => {
  res.send("<h1>Hello from express</h1>");
});

// API Routes for User operations

// GET all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await findAllUsers();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET users by criteria
app.get("/api/users/search", async (req, res) => {
  try {
    const { role, name } = req.query;
    const criteria = {};

    if (role) criteria.role = role;
    if (name) criteria.name = { $regex: name, $options: "i" };

    const users = await findUsersByCriteria(criteria);
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST create new user
app.post("/api/users", async (req, res) => {
  try {
    const savedUser = await createUser(req.body);
    res.status(201).json({ success: true, data: savedUser });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT update user
app.put("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE users by criteria
app.delete("/api/users", async (req, res) => {
  try {
    const { role } = req.query;
    const filter = role ? { role } : {};

    const result = await deleteManyUsers(filter);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE user by ID
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await deleteUserById(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.json({ success: true, data: deletedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

// Connect to database before starting server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      "Server running in " + process.env.NODE_ENV + " mode on port " + PORT
    );
    console.log("📡 API Routes available:");
    console.log("   GET  /api/users - Get all users");
    console.log("   GET  /api/users/:id - Get user by ID");
    console.log("   GET  /api/users/search?role=admin - Search users");
    console.log("   POST /api/users - Create new user");
    console.log("   PUT  /api/users/:id - Update user");
    console.log("   DELETE /api/users/:id - Delete user by ID");
    console.log("   DELETE /api/users?role=user - Delete users by criteria");
  });
});
