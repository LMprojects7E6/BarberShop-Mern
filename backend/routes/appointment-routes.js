//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointment-controller");

//!CRUD
router.get("/:id",appointmentController.getAllAppointmentsByUserId );
router.post("/", appointmentController.createAppointment );
router.delete("/:role/:id", );

module.exports = router;
