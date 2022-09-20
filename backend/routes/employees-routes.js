const express = require("express");

const router = express.Router();
const employeeController = require("../controllers/employee-controller");

router.get("/", employeeController.getEmployees);
router.get("/:id", employeeController.getEmployeesById);
router.post("/", employeeController.createEmployee);
router.patch("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
