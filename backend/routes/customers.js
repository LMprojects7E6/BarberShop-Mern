import express from "express";

const router = express.Router();
const customerController = require('../controllers/customer-controller');

router.get("/costumers", customerController.getCostumers);
router.get("/costumers/:id", customerController.getCostumersById);
router.delete("/costumers/:id", customerController.deleteCostumer);

export default router;
