const tokenService = require("./tokenService");
const userService = require("./userService");

const loginUser = async (email, password) => {
  if (email == "admin@gmail.com" && password == "Admin") {
    let user = { email: "admin@gmail.com", password: "Admin" };
    return user;
  } else {
    console.log("error while login");
    return null
  }
};
const refreshAuth = async (refreshToken) => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(
      refreshToken,
      "refresh",
      "iamaprocoder!!"
    );
    if (
      refreshTokenDoc.email == "admin@gmail.com" &&
      refreshTokenDoc.password == "Admin"
    ) {
      return tokenService.generateAuthTokens(refreshTokenDoc);
    } else {
      throw new Error();
    }
    // const user = await userService.getUserById(refreshTokenDoc.user);
    // console.log(user)
    // if (!user) {
    // }
    // await refreshTokenDoc.remove();
  } catch (error) {
    console.log(error, "please auth");
    // throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
  }
};
module.exports = {
  loginUser,
  refreshAuth,
};
