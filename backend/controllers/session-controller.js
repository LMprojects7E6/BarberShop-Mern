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
      console.log(dbPassword);
      console.log(password);
      //Check if the client password and the encrypted password from DB match
      await bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
          console.log(match);
          res.status(400).send("Wrong password and username please try again ");
        } else {
          //If password is correct
          //Create JWT token
          const accesToken = createToken(user);
          //Store JWT in coockies
          res.cookie("access-token", accesToken, {
            maxAge: 86400000,
          });
          //Send response
          //TODO role response?
          res.status(400).send(user);
        }
      });
    } else {
      res.status(400).send(`Wrong password and username please try again `);
    }
  } catch (error) {
    res.status(400).send({ message: `Error with the login: ${error}` });
  }
};

//!REGISTER FUNCTION
const registerController = async (req, res, next) => {
  try {
    //Get body params
    const { first_name, last_name, email, password, role } = req.body;
    if (password.length < 5) {
      res.status(400).send({ message: "Password is to short" });
    }
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
    res.status(200).send(`Created ${user}`);
  } catch (error) {
    res
      .status(400)
      .send({ message: `Error while creating the user : ${error}` });
  }
};

module.exports = {
  loginController: loginController,
  registerController: registerController,
};
