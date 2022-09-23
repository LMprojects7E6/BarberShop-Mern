const express = require("express");

const router = express.Router();
const appointmentController = require("../controllers/appointment-controller");

// router.get("/",);
router.get("/:id",appointmentController.getAllAppointmentsByUserId );
router.post("/", appointmentController.createAppointment );
router.delete("/:role/:id", );

module.exports = router;
