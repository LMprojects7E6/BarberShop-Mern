//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

const getUsersByRole = async (req, res) => {
  //   console.log(req.params);
  //   const { role } = req.params;
  res.status(200).send(req.params);
  return;
  console.log(role);
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
    const user = await dbModel.User.find({ email: email }).lean().exec();

    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getUsersById = async (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  //   try {
  //     const user = await dbModel.User.findOne({ _id: id }).lean().exec();

  //     res.status(200).send(user);
  //   } catch (error) {
  //     res.status(404).send({ message: error.message });
  //   }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await dbModel.User.findOneAndDelete({ id: id });
    res.status(200).send(customer);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const createUser = async (req, res, next) => {
  const { first_name, last_name, email, password, role } = req.body;

  try {
    const newUser = dbModel.User.create({
      first_name,
      last_name,
      email,
      password,
      role,
    });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  try {
    const updatedUser = dbModel.User.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).send(updateUser);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getUsersByRole: getUsersByRole,
  getUsersById: getUsersById,
  getUsersByEmail: getUsersByEmail,
  deleteUser: deleteUser,
  createUser: createUser,
  updateUser: updateUser,
};
