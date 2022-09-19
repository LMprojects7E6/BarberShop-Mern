import express from "express";

const router = express.Router();
const appointmentController = require('../controllers/appointment-controller');

router.get("/appointments/:employee", appointmentController.getAppointmentsByEmployee);
router.get("/appointments/costumer", appointmentController.getAppointmentsByCostumer);
router.post("/appointments", appointmentController.createAppointment);
router.delete("appointments/costumer", appointmentController.deleteAppointment);

export default router;
