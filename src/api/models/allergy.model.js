const mongoose = require("mongoose");

const allergySchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
});

const Allergy = mongoose.model("Allergy", allergySchema);

module.exports = Allergy;
