const express = require("express");
const user = require("../module/usermodule");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register controller
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check if username already exist or not

    const checkUsername = await user.findOne({
      $or: [{ username }, { email }],
    });

    if (checkUsername) {
      return res.status(400).json({
        status: "False",
        message: "Username or email already exist",
      });
    }

    //using bcryptjs to hash password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    //inserting user detail in the database
    const newUser = await user.create({
      username,
      email,
      password: hashedpassword,
    });

    if (newUser) {
      return res.status(201).json({
        status: "Success",
        message: "Inserted successfully",
      });
    } else {
      return res.status(400).json({
        status: "False",
        message: "OHH NOOO, Error occured",
      });
    }
  } catch (e) {
    console.log("Some error occured", e);
  }
};

//login controller

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const checkvalidUser = await user.findOne({ username });

    if (!checkvalidUser) {
      return res.status(400).json({
        status: "Not success",
        message: "Username already exist",
      });
    }

    const chechPassword = await bcrypt.compare(
      password,
      checkvalidUser.password
    );

    if (!chechPassword) {
      return res.status(400).json({
        status: "Not success",
        message: "Passowrd not matching",
      });
    }

    //create access token
    const detail = jwt.sign(
      {
        userId: checkvalidUser._id,
        username: checkvalidUser.username,
        role: checkvalidUser.role,
      },
      process.env.JWT_SECRETE_KEY,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      status: "success",
      message: "Login successfull",
      detail,
    });
  } catch (e) {
    console.log("Some error occured", e);
  }
};

module.exports = { register, login };
