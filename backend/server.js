//!DEPENDENCIES : EXPRESS
const express = require("express");
const app = express();
//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!CONNECT TO SERVER MONGO
const connect = require("./config/dbConfig");
connect();
//!MIDDLEWARES: GET PARAMETERS FROM THE BODY AND JSON PARSER THEM
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(process.env.PORT);
//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port:`);
});


