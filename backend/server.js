//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!ADD ROUTES
const userRoutes = require("./routes/users-routes");
const employeesRoutes = require("./routes/employees-routes");
const customersRoutes = require("./routes/customers-routes");
const appointmentRoutes = require("./routes/appointment-routes");

//!CONNECT TO SERVER MONGO
const connect = require("./config/dbConfig");
connect();

//!MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use("/users", userRoutes);
app.use("/employees", employeesRoutes);
app.use("/customers", customersRoutes);
app.use("/appointment", appointmentRoutes);

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
