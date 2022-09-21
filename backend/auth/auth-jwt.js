const { verify, sign } = require("jsonwebtoken");

//Function to generate a JWT
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

const validateToken = (req, res, next) => {
  //Get cookies from client
  const accessToken = req.cookies["access-token"];
  //If jwt doesnt exist
  if (!accessToken) {
    return res.status(400).send("Token is not set please try to log in");
  }
  //If exist check if jwt its correct
  try {
    //1.Check if jwt match with secret key
    //2.Check if the token didnt expired
    const validateToken = verify(accessToken, process.env.SECRET_KEY);
    if (validateToken) {
      //Create a property to the request
      req.authenticated = true;
      //Continue with rest of the code after midleware aplies
      return next();
    }
  } catch (error) {
    return res.status(400).send(`Error with the token: ${error}`);
  }
};

module.exports = {
  createToken: createToken,
  validateToken: validateToken,
};
