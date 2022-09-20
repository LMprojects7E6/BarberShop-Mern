//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

// CRUD controllers

async function getEmployees(req, res, next){
    try {
        const employees = await dbModel.User.find({role:"employee"}).lean().exec();

        res.status(200).send({ data : employees })
    } catch (error) {
        next(error);
    }
}

async function getEmployeesById(req, res, next){

}

async function createEmployee(req, res, next){

}

async function updateEmployee(req, res, next){

}

async function deleteEmployee(req, res, next){

}

module.exports = {
    getEmployees : getEmployees,
    getEmployeesById : getEmployeesById,
    createEmployee: createEmployee,
    updateEmployee : updateEmployee,
    deleteEmployee : deleteEmployee
}