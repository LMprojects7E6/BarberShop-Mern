const { verify, sign } = require("jsonwebtoken");

const createToken = (user) => {
  const accessToken = sign(
    {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    },
    process.env.SECRET_KEY,
    { expiresIn: "15s" }
  );
  return accessToken;
};

module.exports = {
  createToken: createToken,
};
