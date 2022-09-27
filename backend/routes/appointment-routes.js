//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointment-controller");

//!CRUD
router.get("/", appointmentController.getAllAppointmentsByUserId);
router.post("/", appointmentController.createAppointment);
router.delete("/:appointmentID", appointmentController.deleteAppointment);

module.exports = router;
