import express from "express";

const router = express.Router();
const appointmentController = require("../controllers/appointment-controller");

router.post("/appointments", appointmentController.createAppointment);
router.get("/appointments/:role", appointmentController.getAppointmentsByRole);
router.delete(
  "appointments/:role/:id",
  appointmentController.deleteAppointment
);

export default router;
