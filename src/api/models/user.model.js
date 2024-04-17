const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { setError } = require("../../utils/error.util");

const {
  validationPassword,
  validationEmail,
} = require("../../utils/validator.util");

const userSchema = new mongoose.Schema({

  
  name: {
    type: String,
    required: true
  },

  phoneNumber: {
    type: Number,
  },

  email:
  {
    type: String,
    trim: true,
    required: true
  },

  coverImage: {
    type: String,
    required: false,
  }, 

  password:
  {
    type: String,
    trim: true,
    required: true
  },

   sosContact: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "SosContact",
   required: false
  },
   
  allergy: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Allergy",
   required: false
     
   }


});

userSchema.pre("save", function (next) {
  if (!validationPassword(this.password)) {
    return next(setError("404", "The password does not meet the requirements"));
  }
  if (!validationEmail(this.email)) {
    return next(setError("404", "The email is not correct"));
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
