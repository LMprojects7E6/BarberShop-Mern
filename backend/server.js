//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!CONNECT TO SERVER MONGO
const connect = require("./config/dbConfig");
connect();

//!MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
const corsOptions = {
  //Allow to set coockies in header
  credentials: true,
  //allow petitions from this domain when deploying maybe change to actual domain name
  origin: "http://localhost:3000",
};
//Cors middleware
app.use(cors(corsOptions));
app.use(cookieParser());
const { validateToken } = require("./auth/auth-jwt");

//!ROUTES

//!REQUIRE ROUTES ROUTE
const registerRoutes = require("./routes/register-routes");
const loginRoutes = require("./routes/login-routes");
const logoutRoutes = require("./routes/logout-routes");

//!ROUTES
app.use("/register", registerRoutes);

app.use("/login", loginRoutes);

app.use("/logout", logoutRoutes);

//!TODO:DELETE TEST AND PUT IT IN CORRESPONDENT FOLDER
// app.get("/dashboard", validateToken, (req, res, next) => {
//   res.status(200).send({ role: req.role });
// });
const Users = require("./models/user-model");
const Appointments = require("./models/appointment-model");
//!Create appointment
app.post("/appointment", async (req, res, next) => {
  const { employeeID, customerID, appointment } = req.body;
  const { date } = appointment;
  const formatDate = new Date(date);
  appointment.date = formatDate;
  //Create appointment
  const appointmentBD = await Appointments.create(appointment);
  await appointmentBD.save();
  //Create reference of appointment in employee
  const employeeAppointment = await Users.findByIdAndUpdate(employeeID, {
    $push: { appointments: appointmentBD.id },
  });
  await employeeAppointment.save();
  //Create reference of appointment in customer
  const customerAppointment = await Users.findByIdAndUpdate(customerID, {
    $push: { appointments: appointmentBD.id },
  });
  await customerAppointment.save();

  res.send("CREATED APOINTMENT");
});
//!ACCESS APOINTMENTS OF EMPLOYEE
app.get("/employee-appointment", async (req, res, next) => {
  const user = await Users.findById("632cf64765b88ef0037c6c81").populate(
    "appointments"
  );

  res.send(user.appointments);
});
//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
