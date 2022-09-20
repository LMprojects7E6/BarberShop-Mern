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
//!LOGIN TEST
const bcrypt = require("bcrypt");
const Users = require("./models/user-model");
const { createToken } = require("./auth/auth-jwt");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //Check if user exist
    const user = await Users.findOne({ email: email });
    if (user) {
      const dbPassword = user.password;
      console.log(dbPassword);
      console.log(password);
      //Check if the client password and the encrypted password from DB match
      await bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
          console.log(match);
          res
            .status(400)
            .send("Wrong password and username please try again 1");
        } else {
          //If password is correct
          //Create JWT token
          const accesToken = createToken(user);
          //Store JWT in coockies
          res.cookie("access-token", accesToken, {
            maxAge: 86400000,
          });
          //Send response
          //TODO role response?
          res.status(400).send(user);
        }
      });
    } else {
      res.status(400).send(`Wrong password and username please try again 2`);
    }
  } catch (error) {
    res.status(400).send({ message: `Error with the login: ${error}` });
  }
});

//!END LOGIN TEST
// app.get("/logout", (req, res, next) => {
//   res.send("Hello logout");
// });

//!END TEST

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
