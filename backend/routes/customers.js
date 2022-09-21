import express from "express";

const router = express.Router();
const customerController = require('../controllers/customer-controller');

router.get("/costumers", customerController.getCustomers);
router.get("/costumers/:id", customerController.getCustomersById);
router.delete("/costumers/:id", customerController.deleteCustomer);

export default router;
