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
      .send({ errorMsg: "Cannot create appointment", error: error });
  }
};

//!Delete appointment
const deleteAppointment = async (req, res) => {
  try {
    // const { employeeID, customerID, appointmentID } = req.body;
    const { appointmentID } = req.params;
    //Find all users with appointment ID in "appointments" ref
    const users = await dbModel.User.find({
      appointments: { $elemMatch: { $eq: appointmentID } },
    });
    //Get the ids of "users" with appointments to delete
    //Delete "appointment objectID" elem inside array "appointments"
    users.forEach(async (user) => {
      return await dbModel.User.updateOne(
        { _id: user._id },
        {
          $pull: {
            appointments: appointmentID,
          },
        }
      );
    });
    //Delete appointment doc
    const appointment = await dbModel.Appointment.findByIdAndDelete(
      appointmentID
    );
    res.status(200).send("Appointment deleted!!");
    // res.send(users);
  } catch (error) {
    res.status(400).send({ errorMsg: "Cannot delete appointment", error });
  }
};

module.exports = {
  getAllAppointmentsByUserId: getAllAppointmentsByUserId,
  createAppointment: createAppointment,
  deleteAppointment: deleteAppointment,
};
