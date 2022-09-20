//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

async function getCustomers(req, res, next) {
  try {
    const employees = await dbModel.User.find({ role: "customer" })
      .lean()
      .exec();

    res.status(200).send({ data: employees });
  } catch (error) {
    next(error);
  }
}

async function getCustomersById(req, res, next) {}

async function deleteCustomer(req, res, next) {}

module.exports = {
  getCustomers: getCustomers,
  getCustomersById: getCustomersById,
  deleteCustomer: deleteCustomer,
};
