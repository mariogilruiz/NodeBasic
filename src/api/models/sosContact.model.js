const mongoose = require("mongoose");

// Definición del esquema del álbum
const sosContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  numberPhone: {
    type: Number,
    required: true,
  },
 
  email: {
    type: String,
    required: true,
  },

  user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
   required: true

  }


});

const SosContact = mongoose.model("SosContact", sosContactSchema);

module.exports = SosContact;
