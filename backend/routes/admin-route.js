const express = require("express");

const authMiddleware = require("../middleware/authmiddleware");
const checkAdmin = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/adminpage", authMiddleware, checkAdmin, (req, res) => {
  return res.json({
    status: "Success",
    message: "This is admin page",
  });
});

module.exports = router;
