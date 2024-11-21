const express = require("express");

const checkAdmin = (req, res, next) => {
  if (req.userInfo.role === "user") {
    return res.json({
      message: "User is not allowed to access admin page",
    });
  }
  next();
};

module.exports = checkAdmin;
