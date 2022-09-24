const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "User's first name is required"],
  },
  lastName: { type: String, required: [true, "User's last name is required"] },
  email: {
    type: String,
    required: [true, "User's email-id is required"],
    unique: true,
    validate: [isEmail, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "User's password is required"],
  },
});

module.exports = mongoose.model("users", userSchema);
