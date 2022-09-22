//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

const getUsers = async (req, res) => {
  const key = Object.keys(req.query);
  const value = Object.values(req.query)[0];

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

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await dbModel.User.findOneAndDelete({ _id: id });
    res.status(200).send(customer);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;

  try {
    const newUser = await dbModel.User.create({
      first_name,
      last_name,
      email,
      password,
      role,
    });

    res.status(200).send("User created");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const user = await dbModel.User.findById(req.params.id);

  if (!user) return res.status(404).send("No user with that id");

  const updatedUser = await dbModel.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).send(updatedUser);
};

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
