//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

const getCostumers = async (req, res, next) => {
    try {
        const employees = await dbModel.User.find({role:"customer"}).lean().exec();

        res.status(200).send({ data : employees })
    } catch (error) {
        next(error);
    }
}

const getCostumersById = (req, res, next) => {

}

const deleteCostumer = (req, res, next) => {
    
}

module.exports = {
    getCostumers : getCostumers,
    getCostumersById : getCostumersById,
    deleteCostumer : deleteCostumer
}