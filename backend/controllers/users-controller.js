//!DEPENDENCIES TO REGISTER
const Users = require("../models/user-model");
const bcrypt = require("bcrypt");

const login = (req, res, next) => {};
//!REGISTER FUNCTION
const register = async (req, res, next) => {
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
  login: login,
  register: register,
};
