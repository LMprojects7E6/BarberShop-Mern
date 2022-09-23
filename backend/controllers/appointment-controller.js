//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

//!Get appointment OLD VERSION
// const getAppointmentsById = async (req, res) => {
//   const key = Object.keys(req.query);
//   const value = Object.values(req.query)[0];
//   console.log(key);
//   console.log(value);

//   try {
//     const appointmentList = await dbModel.Appointment.find({
//       "employee._id": value,
//     });

//     res.status(200).send(appointmentList);
//   } catch (error) {
//     res.status(404).send({ message: error.message });
//   }
// };

//!Get appointment
const getAllAppointmentsByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const appointmentList = await dbModel.User.find({_id: id }).populate('appointments');

    res.status(200).send(appointmentList);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!ACCESS APOINTMENTS OF EMPLOYEE
// app.get("/employee-appointment", async (req, res, next) => {
//   const user = await Users.findById("632cf64765b88ef0037c6c81").populate(
//     "appointments"
//   );

//   res.send(user.appointments);
// });

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

  res.send("CREATED APOINTMENT");
};

//!Update appointment TODO ??
const updateAppointment = async (customer, newAppointment) => {
  const filter = { _id: customer };
  const update = { appointments: appointments.push(newAppointment) };
  try {
    const updateAppointment = await dbModel.User.updateOne(filter, update);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!Delete appointment
const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await dbModel.Appointment.findOneAndDelete({ id: id });
    res.status(200).send(appointment);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getAllAppointmentsByUserId: getAllAppointmentsByUserId,
  createAppointment: createAppointment,
  deleteAppointment: deleteAppointment,
};
