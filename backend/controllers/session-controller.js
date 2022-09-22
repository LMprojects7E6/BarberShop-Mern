//!DEPENDENCIES TO REGISTER
const Users = require("../models/user-model");
const bcrypt = require("bcrypt");
const { createToken } = require("../auth/auth-jwt");

//!LOGIN CONTROLLER
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //Check if user exist
    const user = await Users.findOne({ email: email });
    if (user) {
      const dbPassword = user.password;
      //Check if the client password and the encrypted password from DB match
      await bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
          return res
            .status(400)
            .send("Wrong password and username please try again ");
        } else {
          //If password is correct
          //Create JWT token
          const accesToken = createToken(user);
          //Store JWT in coockies
          res.cookie("access-token", accesToken, {
            //TODO: check secure depending on environment
            //Petition with http or https only
            secure: false,
            //Cannot get coockies from js script
            httpOnly: true,
            //If coockie should be accesible only in the same domain
            sameSite: false,
            //Expiration
            maxAge: 86400000,
          });
          //Send response
          //TODO role response?
          return res.status(200).send(user);
        }
      });
    } else {
      return res
        .status(400)
        .send(`Wrong password and username please try again `);
    }
  } catch (error) {
    return res.status(400).send({ message: `Error with the login: ${error}` });
  }
};

//!REGISTER FUNCTION
const registerController = async (req, res, next) => {
  try {
    //Get body params
    const { first_name, last_name, email, password, role } = req.body;
    if (password.length < 5) {
      return res.status(400).send({ message: "Password is to short" });
    } else {
      //Encrypt data
      const hash = await bcrypt.hash(password, 10);
      //Create user
      const user = await Users.create({
        first_name,
        last_name,
        email,
        password: hash,
        role,
      });

      //Save user and send resp
      await user.save();
      return res.status(200).send(`Created ${user}`);
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: `Error while creating the user : ${error}` });
  }
};

module.exports = {
  loginController: loginController,
  registerController: registerController,
};
