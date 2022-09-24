//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

//!Get appointment
const getAllAppointmentsByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const appointmentList = await dbModel.User.find({ _id: id }).populate(
      "appointments"
    );

    res.status(200).send(appointmentList);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!Update Users appointment array
const updateAppointment = async (req, res) => {
  const { id, appointments } = req.body;

  try {
    const updateUser = dbModel.User.findOneAndUpdate({ _id: id });
  } catch (error) {}
};

//!Create appointment
const createAppointment = async (req, res) => {
  const { employeeID, customerID, appointment } = req.body;
  const { date } = appointment;
  const formatDate = new Date(date);
  appointment.date = formatDate;
  //Create appointment
  const appointmentBD = await dbModel.Appointment.create(appointment);
  await appointmentBD.save();
  //Create reference of appointment in employee
  const employeeAppointment = await dbModel.User.findByIdAndUpdate(employeeID, {
    $push: { appointments: appointmentBD.id },
  });
  await employeeAppointment.save();
  //Create reference of appointment in customer
  const customerAppointment = await dbModel.User.findByIdAndUpdate(customerID, {
    $push: { appointments: appointmentBD.id },
  });
  await customerAppointment.save();

  res.send("CREATED APPOINTMENT");
};

//!Delete appointment
const deleteAppointment = async (req, res) => {
  const { employeeID, customerID, appointmentID } = req.body;

  try {
    //Delete reference of appointment in employee
    const employeeAppointment = await dbModel.User.findByIdAndUpdate(
      employeeID,
      {
        $pull: { appointments: appointmentID },
      }
    );
    //Delete reference of appointment in customer
    const customerAppointment = await dbModel.User.findByIdAndUpdate(
      customerID,
      {
        $pull: { appointments: appointmentID },
      }
    );
    //Delete the appointment
    const appointment = await dbModel.Appointment.findOneAndDelete({
      _id: appointmentID,
    });
    res.status(200).send("Appointment deleted successfully!");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getAllAppointmentsByUserId: getAllAppointmentsByUserId,
  createAppointment: createAppointment,
  updateAppointment: updateAppointment,
  deleteAppointment: deleteAppointment,
};
