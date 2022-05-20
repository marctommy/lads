const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    sendBy: String,

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Message", messageSchema);
