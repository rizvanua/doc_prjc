const jwt = require("jsonwebtoken");
const secretKey = "mysupersecrettoken";

module.exports.accessToken = ({ email }) =>
  jwt.sign({ email: email }, secretKey, { expiresIn: "1h" });

module.exports.refreshToken = ({ email }) =>
  jwt.sign({ email: email }, secretKey, { expiresIn: "1d" });

module.exports.verifyToken = ({ token }) => {
  try {
    return jwt.verify(token, secretKey, (err, decoded) => ({
      email: decoded.email,
      isAuth: !!decoded?.exp,
    }));
  } catch (e) {
    console.log(e);
    return { email: null, isAuth: false };
  }
};
