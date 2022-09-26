//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

//!Get appointment
const getAllAppointmentsByUserId = async (req, res) => {
  const id = req.id;
  try {
    const appointmentList = await dbModel.User.findById(id).populate(
      "appointments"
    );
    const { appointments } = appointmentList;
    res.status(200).send(appointments);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!Update Users appointment array
// const updateAppointment = async (req, res) => {
//   const { id, appointments } = req.body;

//   try {
//     const updateUser = dbModel.User.findOneAndUpdate({ _id: id });
//   } catch (error) {}
// };

//!Create appointment
const createAppointment = async (req, res) => {
  try {
    const { employeeID, customerID = req.id, appointment } = req.body;
    const { date, price } = appointment;

    //Create appointment
    const appointmentBD = await dbModel.Appointment.create({
      price: price,
      date: new Date(date),
    });
    await appointmentBD.save();
    //Create reference of appointment in employee
    const employeeAppointment = await dbModel.User.findByIdAndUpdate(
      employeeID,
      {
        $push: { appointments: appointmentBD.id },
      }
    );
    await employeeAppointment.save();
    //Create reference of appointment in customer
    const customerAppointment = await dbModel.User.findByIdAndUpdate(
      customerID,
      {
        $push: { appointments: appointmentBD.id },
      }
    );
    await customerAppointment.save();
    res.status(200).send({ message: `Appointment created at ${date}` });
  } catch (error) {
    res
      .status(400)
      .send({ errrorMsg: "Cannot create appointment", error: error });
  }
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
    res
      .status(404)
      .send({ errorMsg: "Uuups!! something went wrong", error: error });
  }
};

module.exports = {
  getAllAppointmentsByUserId: getAllAppointmentsByUserId,
  createAppointment: createAppointment,
  deleteAppointment: deleteAppointment,
};
