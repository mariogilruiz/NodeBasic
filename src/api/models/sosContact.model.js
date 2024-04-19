const mongoose = require("mongoose");

// Definición del esquema del álbum
const sosContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },

  numberPhone: {
    type: Number,
    required: false,
  },
 
  email: {
    type: String,
    required: false,
  },

  user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
   required: false

  }


});

const SosContact = mongoose.model("SosContact", sosContactSchema);

module.exports = SosContact;
