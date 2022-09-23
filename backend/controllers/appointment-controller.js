//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");
const { updateUser } = require("./users-controller");

const getAppointments = async (req, res) => {
  const { id } = req.params;

  try {
    const appointmentList = await dbModel.User.find({ _id: id })
      .populate("appointments")
      .select({ appointments$date: 1 })
      .lean()
      .exec();

    res.status(200).send(appointmentList);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getAppointmentsById = async (req, res) => {
  const key = Object.keys(req.query);
  const value = Object.values(req.query)[0];
  console.log(key);
  console.log(value);

  try {
    const appointmentList = await dbModel.Appointment.find({
      "employee._id": value,
    });

    res.status(200).send(appointmentList);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const createAppointment = (req, res) => {
  const { price, employee, customer, date } = req.body;

  try {
    const newAppointment = dbModel.Appointment.create({
      price,
      employee,
      customer,
      date,
    });
    updateUser(customer, newAppointment);
    res.status(200).send(newAppointment);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const updateUser = async (customer, newAppointment) => {
  const filter = { _id: customer };
  const update = { appointments: appointments.push(newAppointment) };
  try {
    const updateAppointment = await dbModel.User.updateOne(filter, update);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

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
  getAppointmentsById: getAppointmentsById,
  createAppointment: createAppointment,
  deleteAppointment: deleteAppointment,
  getAppointments: getAppointments,
};
