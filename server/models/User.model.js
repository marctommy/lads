const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: String,
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  eventsAttended: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
});
module.exports = model("User", userSchema);
