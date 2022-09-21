const express = require("express");

const router = express.Router();
const appointmentController = require("../controllers/appointment-controller");

router.post("/", appointmentController.createAppointment);
// router.get("/:role", appointmentController.getAppointmentsByRole);
router.delete("/:role/:id", appointmentController.deleteAppointment);

module.exports = router;
