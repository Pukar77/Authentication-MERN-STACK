const mongoose = require("mongoose");
const express = require("express");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pukarrimal11:pukarrimal12@cluster0.rbszi.mongodb.net/authentication"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log("Error in connection");
  }
};

module.exports = dbConnection;
