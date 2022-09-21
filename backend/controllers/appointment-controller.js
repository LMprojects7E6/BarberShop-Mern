//CONNECTION TO DATABASE MODELS
const dbModel = require("../models");

const getAppointments = async (req, res) => {
  try {
    const appointmentList = await dbModel.Appointment.find({}).lean().exec();
    console.log(appointmentList);
    res.status(200).send(appointmentList);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getAppointmentsById = async (req, res) => {
  const { id } = req.params;

  try {
    const appointmentList = await dbModel.Appointment.find({ employee: id })
      .lean()
      .exec();
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
    res.status(200).send(newAppointment);
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
