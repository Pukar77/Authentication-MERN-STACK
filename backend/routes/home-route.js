const express = require("express");
const authMiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.get("/welcome", authMiddleware, (req, res) => {
  const { username, userId, role } = req.userInfo;
  return res.json({
    message: "Welcome to home page",
    user: {
      username,
      _id: userId,
      role,
    },
  });
});

module.exports = router;
