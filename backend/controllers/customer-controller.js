//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

const getUsersByRole = async (req, res) => {
  const { role } = req.params;
  try {
    const employees = await dbModel.User.find({ role: role }).lean().exec();

    res.status(200).send({ data: employees });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getUsersByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const customer = await dbModel.User.find({ email: email });

    res.status(200).send(customer);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getUsersById = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await dbModel.User.find({ id: id });

    res.status(200).send(customer);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await dbModel.User.remove({ id: id });
    res.status(200).send(customer);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getUsersByRole: getUsersByRole,
  getUsersById: getUsersById,
  getUsersByEmail: getUsersByEmail,
  deleteUser: deleteUser,
};
