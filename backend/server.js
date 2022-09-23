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
  //Allow to set cookies in header
  credentials: true,
  //allow petitions from this domain when deploying maybe change to actual domain name
  origin: "http://localhost:3000",
};
//Cors middleware
app.use(cors(corsOptions));
app.use(cookieParser());
const { validateToken } = require("./auth/auth-jwt");

//!ROUTES
/***************/
//TODO FIX ROUTES ESTO NO FUNCIONA Y PETA
// const userRoutes = require("./routes/users-routes");
// const employeesRoutes = require("./routes/employees-routes");
// const customersRoutes = require("./routes/customers-routes");
// const appointmentRoutes = require("./routes/appointment-routes");
// app.use("/users", userRoutes);
// app.use("/employees", employeesRoutes);
// app.use("/customers", customersRoutes);
// app.use("/appointment", appointmentRoutes);

//!REQUIRE ROUTES ROUTE
const registerRoutes = require("./routes/register-routes");
const loginRoutes = require("./routes/login-routes");
const logoutRoutes = require("./routes/logout-routes");

//!ROUTES
app.use("/register", registerRoutes);

app.use("/login", loginRoutes);

app.use("/logout", logoutRoutes);

app.get("/dashboard", validateToken, (req, res, next) => {
  res.status(200).send({ role: req.role });
});

app.get("/test", (req, res, next) => {
  res.send("PETITION GOOD");
});
app.post("/test", (req, res, next) => {
  res.send(req.body);
});
//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
