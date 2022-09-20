const mongoose = require("mongoose");

const AppointmentShema = new mongoose.Schema({
  precio: { type: Number, required: true, trim: true },
  data: { type: Data, required: true },
  employee: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
});

const AppointmentModel = new mongoose.model("appointment", AppointmentShema);

module.export = AppointmentModel;
