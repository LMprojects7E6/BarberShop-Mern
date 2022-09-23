//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");
const bcrypt = require("bcrypt");

//!Get Users
const getUsers = async (req, res) => {
  const objectKeys = Object.keys(req.body);
  const objectValues = Object.values(req.body);
  const key = objectKeys[0];
  const value = objectValues[0];

  if (!queryToKey[key]) {
    res.status(400).send({ message: "invalid endpoint" });
  }

  try {
    const user = await dbModel.User.find({
      [queryToKey[key]]: value,
    })
      .lean()
      .exec();
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!Delete User
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await dbModel.User.findOneAndDelete({ _id: id });
    res.status(200).send(customer);
  } catch (error) {
    res.status(404).send({ message: error.message });
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
      role,
    });

    res.status(200).send("User created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!Update User
const updateUser = async (req, res) => {
  const user = await dbModel.User.findById(req.params.id);
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
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).send(updatedUser);
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
