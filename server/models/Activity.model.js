const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  duration: Number,
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
module.exports = model("Activity", activitySchema);
