//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

const getAllUsers = async (req, res) => {
  try {
    const user = await dbModel.User.find({}).lean().exec();

    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  const values = req.query;
  console.log(values);

  try {
    values.role
      ? (user = await dbModel.User.find({ role: values.role }).lean().exec())
      : (user = await dbModel.User.find({ _id: values.id }).lean().exec());

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
  const { first_Name, last_Name, email, password, role } = req.body;

  try {
    const newUser = await dbModel.User.create({
      first_Name,
      last_Name,
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
  const { id } = req.params;
  const { first_Name, last_Name, email, password } = req.body;

  try {
    const updatedUser = await dbModel.User.findByIdAndUpdate(
      id,
      { first_Name, last_Name, email, password },
      {
        new: true,
      }
    );

    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getAllUsers: getAllUsers,
  getUsers: getUsers,
  deleteUser: deleteUser,
  createUser: createUser,
  updateUser: updateUser,
};
