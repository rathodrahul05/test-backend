const authService = require("../services/authService");
const tokenService = require("../services/tokenService");

const login = async (req, res) => {
  console.log('hi')
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email);
  const user = await authService.loginUser(email, password);
  if (user) {
    const token = await tokenService.generateAuthTokens(user);
    res.json(token);
  } else {
    res.send({ message: "Invalid credentials" });
  }
};

const refreshTokens = async (req, res) => {
  console.log('hi')
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
};

module.exports = {
  login,
  refreshTokens,
};
