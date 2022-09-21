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

//!MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
const { validateToken } = require("./auth/auth-jwt");

//!ROUTES
/***************/
//TODO FIX ROUTES
// const userRoutes = require("./routes/users-routes");
// const employeesRoutes = require("./routes/employees-routes");
// const customersRoutes = require("./routes/customers-routes");
// const appointmentRoutes = require("./routes/appointment-routes");
app.use("/users", userRoutes);
app.use("/employees", employeesRoutes);
app.use("/customers", customersRoutes);
app.use("/appointment", appointmentRoutes);
//!REGISTER ROUTE
const registerRoutes = require("./routes/register-routes");
app.use("/register", registerRoutes);

//!LOGIN ROUTE
const loginRoutes = require("./routes/login-routes");
app.use("/login", loginRoutes);

//!LOGOUT ROUTE
const logoutRoutes = require("./routes/logout-routes");
app.use("/logout", logoutRoutes);

//!TEST RESTRICTED ZONE
//TODO RESTRICTED AREA
// app.get("/dashboard", validateToken, (req, res, next) => {
//   console.log(req.authenticated);
//   res.status(400).send("YOU HAVE ACCESS TO DASHBOARD");
// });

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
