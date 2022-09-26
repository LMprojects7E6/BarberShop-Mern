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

//!REQUIRE ROUTES ROUTE
const registerRoutes = require("./routes/register-routes");
const loginRoutes = require("./routes/login-routes");
const logoutRoutes = require("./routes/logout-routes");
const usersRoutes = require("./routes/users-routes");
const appointmentRoutes = require("./routes/appointment-routes");

//!ROUTES
app.use("/register", registerRoutes);

app.use("/login", loginRoutes);

app.use("/logout", logoutRoutes);

app.get("/session", validateToken, (req, res, next) => {
  res.status(200).send({ role: req.role, first_name: req.first_name });
});
app.use("/users", validateToken, usersRoutes);

app.use("/appointments", validateToken, appointmentRoutes);

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
