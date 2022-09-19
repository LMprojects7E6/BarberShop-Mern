import express from "express";

const router = express.Router();
const employeeController = require('../controllers/employee-controller');

router.get("/employees", employeeController.getEmployees);
router.get("/employees/:id", employeeController.getEmployeesById);
router.post("/employees", employeeController.createEmployee);
router.patch("/employees/:id", employeeController.updateEmployee);
router.delete("/employees/:id", employeeController.deleteEmployee);

export default router;
