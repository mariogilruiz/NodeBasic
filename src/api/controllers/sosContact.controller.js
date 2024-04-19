const SosContact = require("../models/sosContact.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createSosContact = async (req, res, next) => {
  try {
    const sosContact = await SosContact.create(req.body);
    console.log(sosContact)
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: sosContact,
    });
  } catch (error) {
    next(error);
  }
};



const getAllSosContact = async (req, res, next) => {
  try {
    const sosContact = await SosContact.find().populate("user");
    console.log(sosContact)
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: sosContact,
    });
  } catch (error) {
    next(error);
  }
};

const getSosContactById = async (req, res, next) => {
  try {
    const sosContact = await SosContact.findById(req.params.id);
    if (user) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: sosContact,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateSosContact = async (req, res, next) => {
  try {
    const sosContact = await SosContact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (sosContact) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: sosContact,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteSosContact = async (req, res, next) => {
  try {
    const sosContact = await SosContact.findByIdAndDelete(req.params.id);
    if (sosContact) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
        data: sosContact,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSosContact,
  getAllSosContact,
  getSosContactById,
  updateSosContact,
  deleteSosContact,
};
