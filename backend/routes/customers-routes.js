const express = require("express");

const router = express.Router();
const customerController = require("../controllers/customer-controller");

router.get("/", customerController.getCostumers);
router.get("/:id", customerController.getCostumersById);
router.delete("/:id", customerController.deleteCostumer);

module.exports = router;
