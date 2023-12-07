const { verifyToken, accessToken, refreshToken } = require("./token");
exports.auth = (req, res, next) => {
  const authHeader = req.get("Authorization");
  const token = authHeader?.split(" ")[1];
  const verificationData = token && verifyToken({ token });
  if (verificationData && verificationData.isAuth && verificationData.email) {
    const { email, isAuth } = verificationData;
    const tokenData = {
      accessToken: accessToken({ email }),
      refreshToken: refreshToken({ email }),
      isAuth,
    };
    res.status(200).json(tokenData);
  }  
  res.status(200).json(verificationData);
};
