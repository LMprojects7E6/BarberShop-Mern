//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

async function getCostumers(req, res, next){
    try {
        const employees = await dbModel.User.find({role:"customer"}).lean().exec();

        res.status(200).send({ data : employees })
    } catch (error) {
        next(error);
    }
}

async function getCostumersById(req, res, next){

}

async function deleteCostumer(req, res, next){
    
}

module.exports = {
    getCostumers : getCostumers,
    getCostumersById : getCostumersById,
    deleteCostumer : deleteCostumer
}