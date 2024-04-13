const { Schema, model } = require("mongoose");

const AgentSchema = new Schema({
  name: { required: true, type: String },
  partners: [{ type: Schema.Types.ObjectId, ref: "Partner" }],
});

module.exports = model("Agent", AgentSchema);
