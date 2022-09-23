const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "The first name is required"],
    trim: true,
  },
  last_name: {
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
    //!PASSWORD HAS ALWAYS BIGGER THAN 5 >  minlength: [5, "The password is too short"],
  },
  role: { type: String, value: ["admin", "employee", "customer"] },
  appointments: [{ type: mongoose.SchemaTypes.ObjectId, ref: "appointment" }],
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
