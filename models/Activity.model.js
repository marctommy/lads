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
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  withChildren: Boolean,
  location: String,
  attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
  user: { type: Schema.Types.ObjectId, ref: "User" },
  conversation: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  category: String,
});
module.exports = model("Activity", activitySchema);
