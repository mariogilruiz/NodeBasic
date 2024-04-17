const mongoose = require("mongoose");

// Definición del esquema del Producto
const productoSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: false,
  },

  ingredients: {
    type: [String],
    required: false,

  },

  allergy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Allergy",
  },

   coverImage: {
    type: String,
    required: false,
  },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
