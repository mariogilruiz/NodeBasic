const express = require("express");
const sosContactRouter = express.Router();
const { createSosContact,
    getAllSosContact,
    getSosContactById,
    updateSosContact,
    deleteSosContact, } = require("../controllers/sosContact.controller");

// Ruta para crear un nuevo álbum
sosContactRouter.post("/", createSosContact);
sosContactRouter.get("/", getAllSosContact);
sosContactRouter.get("/:id", getSosContactById);
sosContactRouter.put("/:id", updateSosContact);
sosContactRouter.delete("/:id", deleteSosContact);

module.exports = sosContactRouter;
