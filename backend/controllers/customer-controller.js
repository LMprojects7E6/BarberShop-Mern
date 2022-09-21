//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

<<<<<<< HEAD
const getCustomers = async (req, res, next) => {
    try {
        const employees = await dbModel.User.find({role:"customer"}).lean().exec();
=======
async function getCustomers(req, res, next) {
  try {
    const employees = await dbModel.User.find({ role: "customer" })
      .lean()
      .exec();
>>>>>>> 771246735bb617b8a7ab76ad9097dea9f66e8cdb

    res.status(200).send({ data: employees });
  } catch (error) {
    next(error);
  }
}

<<<<<<< HEAD
const getCustomersById = (req, res, next) => {

}

const deleteCustomer = (req, res, next) => {
    
}

module.exports = {
    getCustomers : getCustomers,
    getCustomersById : getCustomersById,
    deleteCustomer : deleteCustomer
}
=======
async function getCustomersById(req, res, next) {}

async function deleteCustomer(req, res, next) {}

module.exports = {
  getCustomers: getCustomers,
  getCustomersById: getCustomersById,
  deleteCustomer: deleteCustomer,
};
>>>>>>> 771246735bb617b8a7ab76ad9097dea9f66e8cdb
