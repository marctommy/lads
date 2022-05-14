const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  date: {
    type: Date,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  withChildren: Boolean,
  location: String,
  duration: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  conversation: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  category: String,
});
module.exports = model("Activity", activitySchema);
