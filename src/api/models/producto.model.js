const mongoose = require("mongoose");

// Definición del esquema del Producto
const productoSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },

  coverImage: {
    type: String,
    required: false,
  },

  ingredients: {
    type: [String],
    required: false,

  },

  allergy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Allergy",
  },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
