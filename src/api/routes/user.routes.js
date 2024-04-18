const express = require("express");
const userRouter = express.Router();
const {
  register,
  login,
  logout,
  isAdmin,
  getUserById,
  getAllUsers,
} = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/isadmin", [isAuth], isAdmin);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

module.exports = userRouter;
