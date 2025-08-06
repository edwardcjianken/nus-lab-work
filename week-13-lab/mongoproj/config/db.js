const mongoose = require("mongoose");
const User = require("../models/user.model.js");

// Method 1: Find all users
const findAllUsers = async () => {
  try {
    const users = await User.find();
    console.log("✅ All users found:", users);
    return users;
  } catch (error) {
    console.error("❌ Error finding users:", error.message);
    throw error;
  }
};

// Method 2: Find users by specific criteria
const findUsersByCriteria = async (criteria) => {
  try {
    const users = await User.find(criteria);
    console.log("✅ Users found with criteria:", users);
    return users;
  } catch (error) {
    console.error("❌ Error finding users by criteria:", error.message);
    throw error;
  }
};

// Method 3: Update one user
const updateOneUser = async (filter, updateData) => {
  try {
    const result = await User.updateOne(filter, updateData);
    console.log("✅ User updated:", result);
    return result;
  } catch (error) {
    console.error("❌ Error updating user:", error.message);
    throw error;
  }
};

// Method 4: Delete many users
const deleteManyUsers = async (filter) => {
  try {
    const result = await User.deleteMany(filter);
    console.log("✅ Users deleted:", result);
    return result;
  } catch (error) {
    console.error("❌ Error deleting users:", error.message);
    throw error;
  }
};

// Method 5: Create new user
const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    console.log("✅ User created:", savedUser);
    return savedUser;
  } catch (error) {
    console.error("❌ Error creating user:", error.message);
    throw error;
  }
};

// Method 6: Find user by ID
const findUserById = async (id) => {
  try {
    const user = await User.findById(id);
    console.log("✅ User found by ID:", user);
    return user;
  } catch (error) {
    console.error("❌ Error finding user by ID:", error.message);
    throw error;
  }
};

// Method 7: Find user by email
const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    console.log("✅ User found by email:", user);
    return user;
  } catch (error) {
    console.error("❌ Error finding user by email:", error.message);
    throw error;
  }
};

// Method 8: Update user by ID
const updateUserById = async (id, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    console.log("✅ User updated by ID:", updatedUser);
    return updatedUser;
  } catch (error) {
    console.error("❌ Error updating user by ID:", error.message);
    throw error;
  }
};

// Method 9: Delete user by ID
const deleteUserById = async (id) => {
  try {
    const result = await User.findByIdAndDelete(id);
    console.log("✅ User deleted by ID:", result);
    return result;
  } catch (error) {
    console.error("❌ Error deleting user by ID:", error.message);
    throw error;
  }
};

module.exports = {
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
};
