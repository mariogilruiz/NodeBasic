const Allergy = require("../models/allergy.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createAllergy = async (req, res, next) => {
  try {
    const { name } = req.body
    const image = req.file?req.file.path:""// una ternaria para saber si nos han enviado el archivo
    const allergy = await Allergy.create({name, image});
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: allergy,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAllergies = async (req, res, next) => {
  try {
    const allergy = await Allergy.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: allergy,
    });
  } catch (error) {
    next(error);
  }
};

const getAllergyById = async (req, res, next) => {
  try {
    const allergy = await Allergy.findById(req.params.id);
    if (allergy) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: allergy,
      });
    } else {
      res.status(404).json({ status: 404, message: "Allergy not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateAllergy = async (req, res, next) => {
  try {
    const allergy = await Allergy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (allergy) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: allergy,
      });
    } else {
      res.status(404).json({ status: 404, message: "allergy not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteAllergy = async (req, res, next) => {
  try {
    const allergy = await Allergy.findByIdAndDelete(req.params.id);
    if (allergy) {
      res.status(204).json({ status: 204, message: "Allergy deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Allergy not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAllergy,
  getAllAllergies,
  getAllergyById,
  updateAllergy,
  deleteAllergy,
};
