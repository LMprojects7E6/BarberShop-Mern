const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    price: { type: Number, required: true, trim: true },
    date: { type: Date, required: true },
  },
  { versionKey: false }
);

const AppointmentModel = mongoose.model("appointment", AppointmentSchema);

module.exports = AppointmentModel;
