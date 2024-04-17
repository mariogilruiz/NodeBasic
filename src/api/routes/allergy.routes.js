const express = require("express");
const allergyRouter = express.Router();
const {
  createAllergy,
  getAllAllergies,
  getAllergyById,
  updateAllergy,
  deleteAllergy,
} = require("../controllers/allergy.controller");

allergyRouter.post("/", createAllergy);
allergyRouter.get("/", getAllAllergies);
allergyRouter.get("/:id", getAllergyById);
allergyRouter.put("/:id", updateAllergy);
allergyRouter.delete("/:id", deleteAllergy);

module.exports = allergyRouter;
