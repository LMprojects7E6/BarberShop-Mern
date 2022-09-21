const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  first_Name: {
    type: String,
    required: [true, "The first name is required"],
    trim: true,
  },
  last_Name: {
    type: String,
    required: [true, "The last name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
  },
  password: {
    type: String,
    required: [true, "The password is required"],
    minlength: [5, "The password is too short"],
  },
  role: { type: String, value: ["admin", "employee", "customer"] },
});

const UserModel = new mongoose.model("user", UserSchema);

module.exports = UserModel;
