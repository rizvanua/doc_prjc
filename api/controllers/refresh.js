const { verifyToken, accessToken } = require("./token");
exports.refresh = (req, res, next) => { 
    const authHeader = req.get('Authorization');
    const token = authHeader?.split(' ')[1];
    const verificationData = token && verifyToken({ token });
  if (verificationData && verificationData.isAuth && verificationData.email) {
    const { email, isAuth } = verificationData;
    const tokenData = {
      accessToken: accessToken({ email }),
      isAuth,
    };
    res.status(200).json(tokenData);
  } 
};