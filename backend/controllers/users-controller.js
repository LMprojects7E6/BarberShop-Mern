//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");
const bcrypt = require("bcrypt");

//!Get Users
const getUsers = async (req, res) => {
  const key = Object.keys(req.query);
  const objectValues = Object.values(req.query);
  const value = objectValues[0];

  if (!queryToKey[key]) {
    res.status(400).send({ message: "invalid endpoint" });
  }

  try {
    const user = await dbModel.User.find(
      {
        [queryToKey[key]]: value,
      },
      { password: 0 }
    )
      .lean()
      .exec();
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!Delete User
const deleteUser = async (req, res) => {
  const { id } = req.query;
  try {
    const customer = await dbModel.User.findOneAndDelete({ _id: id });
    res.status(200).send(customer);
  } catch (error) {
    res.status(404).send({ message: "user not found" });
  }
};

//!Create User
const createUser = async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;

  //Encrypt data
  const hash = await bcrypt.hash(password, 10);

  try {
    const newUser = await dbModel.User.create({
      first_name,
      last_name,
      email,
      password: hash,
      role: "employee",
    });

    res.status(200).send(`${first_name} employee created`);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!Update User
const updateUser = async (req, res) => {
  const user = await dbModel.User.findById(req.query.id);
  const userByEmail = await dbModel.User.findOne({ email: req.body.email });
  //Encrypt data
  const hash = await bcrypt.hash(req.body.password, 10);
  req.body.password = hash;

  if (!user) return res.status(404).send("No user with that id");

  if (
    userByEmail !== null &&
    userByEmail._id.toString() !== user._id.toString()
  )
    return res.status(404).send("This email is already taken");

  const updatedUser = await dbModel.User.findByIdAndUpdate(
    req.query.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).send(`${updatedUser.first_name} updated`);
};

//!Helper object to GET Users
const queryToKey = {
  role: "role",
  id: "_id",
};

module.exports = {
  getUsers: getUsers,
  deleteUser: deleteUser,
  createUser: createUser,
  updateUser: updateUser,
};
