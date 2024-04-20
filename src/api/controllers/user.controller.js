const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../utils/error.util");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");
const { jwtDecode } = require("jwt-decode");


const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find().populate("allergy").populate("sosContact");
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: user,
    });
  } catch (error) {
    next(error);
  }
};


const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: user,
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



const register = async (req, res, next) => {
  try {
    const user = new User(req.body);

    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      return next(setError("404", "This email has already been used."));
    }
    const userDB = await user.save();
    return res.status(201).json({
      status: 201,
      message: `User Email ${userDB.email} created User ${userDB._id}`
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email });
    console.log(
      "is password ok?",
      bcrypt.compareSync(req.body.password, userInfo.password)
    );
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = "*************"; // ocultamos el dato password en la respuesta por seguridad
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
          role: userInfo.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        data: { massage: HTTPSTATUSCODE[200], user: userInfo, token: token },
      });
    } else {
      return res.json({
        status: 400,
        message: "El password es incorrecto",
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    const token = null;
    return res.status(200).json({
      status: 200,
      message: "Logout successful",
    });
  } catch (error) {
    return next(setError(error.statusCode, "Logout Error"));
  }
};

const isAdmin = (req, res, next) => {
  const data = req.headers.authorization.split(" ");
  console.log(data);
  const decoded = jwtDecode(data[1]);
  const admin = decoded.role == "admin" ? true : false;
  console.log("isAdmin", admin);
  return admin;
};

module.exports = { getUserById, getAllUsers, register, login, logout, isAdmin };
