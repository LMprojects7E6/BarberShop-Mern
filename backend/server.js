//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
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

//!ROUTES
/***************/
//!REGISTER
const registerRoutes = require("./routes/register-routes");
app.use("/register", registerRoutes);

// app.get("/login", async (req, res, next) => {
//   const users = await Users.find({}).limit(2);
//   res.send(users);
// });

// app.get("/logout", (req, res, next) => {
//   res.send("Hello logout");
// });

//!END TEST

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
