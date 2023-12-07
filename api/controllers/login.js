const { accessToken, refreshToken } = require("./token");
exports.login = (req, res, next) => {
  res
    .status(200)
    .json({
      accessToken: accessToken({ email: req.body.username }),
      refreshToken: refreshToken({ email: req.body.username }),
      isAuth: true,
      userId: "1111",
    });
};
