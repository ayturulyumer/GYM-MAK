const jwt = require("../lib/jwt.js");
const secretKey = "f552cf799188fc0e8f46c75d02300d38147f50bbb1714022b3c60b8623dec679"

exports.auth = (req, res, next) => {
  const token = req.header("Authorization");

  if (token) {
    try {
      const decodedToken = jwt.verify(token, secretKey);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).json({
        message: "You are not authorized",
      });
    }
  } else {
    next();
  }
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }
  next();
};
