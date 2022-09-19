import express from "express";

const router = express.Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeesById);
router.post("/employees", createEmployee);
router.patch("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;
