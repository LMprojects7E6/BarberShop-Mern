const express = require("express");

const router = express.Router();
const appointmentController = require("../controllers/appointment-controller");

router.get("/", appointmentController.getAppointmentsById);
router.get("/:id", appointmentController.getAppointments);
// router.delete("/:role/:id", appointmentController.deleteAppointment);

module.exports = router;
