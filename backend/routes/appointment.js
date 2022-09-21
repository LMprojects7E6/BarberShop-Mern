import express from "express";

const router = express.Router();

router.get("/appointments/:employee", getAppointmentsByEmployee);
router.get("/appointments/costumer", getAppointmentsByCostumer);
router.post("/appointments", createAppointment);
router.delete("appointments/costumer", deleteAppointment);

export default router;
