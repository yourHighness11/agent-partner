const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
  username: { type: Schema.Types.ObjectId, ref: "Partner" },
  messageBody: String,
});

module.exports = model("Message", MessageSchema);
