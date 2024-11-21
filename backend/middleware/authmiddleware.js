const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      status: "Not success",
      message: "Token not available",
    });
  }

  //decode the token
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRETE_KEY);
    console.log(decodedToken);
    req.userInfo = decodedToken;
    next();
  } catch (e) {
    return res.status(500).json({
      status: "Not success",
      message: "Token not available",
    });
  }
};

module.exports = authMiddleware;
