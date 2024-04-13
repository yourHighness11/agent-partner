const { Schema, model } = require("mongoose");

const PartnerSchema = new Schema({
  name: String,
  message: String,
});

module.exports = model("Partner", PartnerSchema);
