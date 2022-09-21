//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

const employeeModel = require("./models/user-model");

//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!ADD ROUTES
// const sessionRoutes = require("./routes/session-routes");
const usersRoutes = require("./routes/users-routes");
// const appointmentRoutes = require("./routes/appointment-routes");

//!CONNECT TO SERVER MONGO
const connect = require("./config/dbConfig");
connect();

//!MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.get("/test", async (req, res, next) => {
  try {
    const employees = await employeeModel
      .find({ role: "employee" })
      .limit(2)
      .lean()
      .exec();

    res.status(200).send({ data: employees });
  } catch (error) {
    next(error);
  }
});

app.use("/users", usersRoutes);
// app.use("/employees", employeesRoutes);
// app.use("/customers", customersRoutes);
// app.use("/appointment", appointmentRoutes);

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
