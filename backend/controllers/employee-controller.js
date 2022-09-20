//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

// CRUD controllers

const  getEmployees = async (req, res, next) => {
    try {
        const employees = await dbModel.User.find({role:"employee"}).lean().exec();

        res.status(200).send({ data : employees })
    } catch (error) {
        next(error);
    }
}

const getEmployeesById = async (req, res, next) => {
    const {id} = req.params

    try {
        const employee = await dbModel.User.findOne({ _id: id }).lean().exec();

        res.status(200).send({ data: employee._id});
    } catch (error) {
        next(error);
    }

}

const createEmployee = async (req, res, next) => {
    const {first_name, last_name, email, password} = req.body;

    try {
        const newEmployee = dbModel.User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            role: "employee"
        });
        
        
    } catch (error) {
        
    }




}

const updateEmployee = async (req, res, next) => {

}

const deleteEmployee = async (req, res, next) => {

}

module.exports = {
    getEmployees : getEmployees,
    getEmployeesById : getEmployeesById,
    createEmployee: createEmployee,
    updateEmployee : updateEmployee,
    deleteEmployee : deleteEmployee
}