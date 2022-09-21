//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

const getCustomers = async (req, res, next) => {
    try {
        const employees = await dbModel.User.find({role:"customer"}).lean().exec();

        res.status(200).send({ data : employees })
    } catch (error) {
        next(error);
    }
}

const getCustomersById = (req, res, next) => {

}

const deleteCustomer = (req, res, next) => {
    
}

module.exports = {
    getCustomers : getCustomers,
    getCustomersById : getCustomersById,
    deleteCustomer : deleteCustomer
}