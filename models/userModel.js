const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "id is required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "id is required"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
