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
  user: { type: Schema.Types.ObjectId, ref: "User" }, // change to creator
  conversation: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  category: String,
  forFree: Boolean,
});
module.exports = model("Activity", activitySchema);
