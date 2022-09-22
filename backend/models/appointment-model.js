const mongoose = require("mongoose");

const AppointmentShema = new mongoose.Schema(
  {
    price: { type: Number, required: true, trim: true },
    date: { type: Date, required: true },
    employee: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "users",
    },
    customer: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "users",
    },
  },
  { versionKey: false }
);

const AppointmentModel = mongoose.model("appointment", AppointmentShema);

module.exports = AppointmentModel;
