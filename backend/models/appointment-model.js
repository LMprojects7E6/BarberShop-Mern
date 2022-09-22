const mongoose = require("mongoose");

const AppointmentShema = new mongoose.Schema(
  {
    price: { type: Number, required: true, trim: true },
    date: { type: Date, required: true },
    employee: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
    },
    customer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false }
);

const AppointmentModel = mongoose.model("appointments", AppointmentShema);

module.exports = AppointmentModel;
