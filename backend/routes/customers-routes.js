const express = require("express");

const router = express.Router();
const customerController = require("../controllers/customer-controller");

router.get("/", customerController.getCustomers);
router.get("/:id", customerController.getCustomersById);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
