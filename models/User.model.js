const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  hobbies: {
    type: [String],
    required: false,
  },
  password: {
    type: String,
    // select: false,
    required: true,
  },
  location: String,
  description: String,
  avatarId: String,
  eventsAttended: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
});
module.exports = model("User", userSchema);
